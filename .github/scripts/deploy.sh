#!/bin/bash

git clone https://.:$TOKEN@$DEPLOY_URL build
cd build
git checkout $DEPLOY_BRANCH || git checkout -b $DEPLOY_BRANCH
rm -rvf * 
cd ..
cp -R $WORKSPACE/dist/* ./build/
cd build
git config --local user.name "$GIT_USERNAME"
git config --local user.email "$GIT_EMAIL"
git add --all
git commit -m "Automatically pushed build files from $SOURCE_REPO"
git push --force --quiet "https://$GIT_USERNAME:$API_TOKEN_GITHUB@$DEPLOY_URL" $DEPLOY_BRANCH:$DEPLOY_BRANCH