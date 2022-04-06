#!/bin/bash

# set environment variables
SRC_HASH=`git rev-parse --verify HEAD`
APP_NAME=$(node -e "console.log(require(\"${WORKSPACE:-.}/package.json\").insights.appname)")
NODE_VERSION=$(node -e "console.log(require(\"${WORKSPACE:-.}/package.json\")?.engines?.node || \"unknown\")")

# check if node version is valid
major_version=0
OLDIFS=$IFS
IFS='.'
read -a versionarr <<EOF
"$NODE_VERSION"
EOF
major_version=${versionarr[0]/>=/}

if [[ $major_version == unknown ]]; then
    echo "No node version specified in package.json -> engines!"
else
    if [ $major_version -lt 16 ]; then
        echo "You are using outdated version of node! Please update to LTS. Current version: $NODE_VERSION"
    fi
fi
IFS=$OLDIFS

# get the PatternFly and RedHat Cloud Services dependencies
PATTERNFLY_DEPS="undefined"
RH_CLOUD_SERVICES_DEPS="undefined"
if [[ -f package-lock.json ]] || [[ -f yarn.lock ]];
then
  LINES=`npm list --silent --depth=0 --production | grep @patternfly -i | sed -E "s/^(.{0})(.{4})/\1/" | tr "\n" "," | sed -E "s/,/\",\"/g"` 
  PATTERNFLY_DEPS="[\"${LINES%???}\"]"
  LINES=`npm list --silent --depth=0 --production | grep @redhat-cloud-services -i | sed -E "s/^(.{0})(.{4})/\1/" | tr "\n" "," | sed -E "s/,/\",\"/g"`
  RH_CLOUD_SERVICES_DEPS="[\"${LINES%???}\"]"
else
  PATTERNFLY_DEPS="[]"
  RH_CLOUD_SERVICES_DEPS="[]"
fi

# clone the build repo and copy over the build directory
git clone https://.:$TOKEN@$DEPLOY_URL build
cd build
git checkout $DEPLOY_BRANCH || git checkout -b $DEPLOY_BRANCH
rm -rvf * 
cd ..
cp -R $WORKSPACE/dist/* ./build/
cd build

# add the app.info.json file to the build directory
echo "{
  \"app_name\": \"$APP_NAME\",
  \"node_version\": \"$NODE_VERSION\",
  \"src_repo\": \"$SOURCE_REPO\",
  \"src_branch\": \"$SOURCE_BRANCH\",
  \"src_hash\": \"$SRC_HASH\",
  \"patternfly_dependencies\": $PATTERNFLY_DEPS,
  \"rh_cloud_services_dependencies\": $RH_CLOUD_SERVICES_DEPS,
}" > ./app.info.json

# add the JenkinsFile file to the build directory
cp $WORKSPACE/JenkinsFile 58231b16fdee45a03a4ee3cf94a9f2c3
sed -s "s/__APP_NAME__/$APP_NAME/" -i ./58231b16fdee45a03a4ee3cf94a9f2c3

git config --local user.name "$GIT_USERNAME"
git config --local user.email "$GIT_EMAIL"
git add --all
git commit -m "Automatically pushed build files from $SOURCE_REPO"
git push --force --quiet "https://$GIT_USERNAME:$API_TOKEN_GITHUB@$DEPLOY_URL" $DEPLOY_BRANCH:$DEPLOY_BRANCH