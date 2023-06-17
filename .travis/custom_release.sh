#!/bin/bash
set -e
set -x

if [ "${TRAVIS_BRANCH}" = "main" ]
then
    echo "PUSHING stage-beta"
    rm -rf ./dist/.git
    .travis/release.sh "stage-beta"
fi

if [[ "${TRAVIS_BRANCH}" = "prod-beta" || "${TRAVIS_BRANCH}" = "prod-stable" || "${TRAVIS_BRANCH}" = "stage-stable" || "${TRAVIS_BRANCH}" = "qa-stable" || "${TRAVIS_BRANCH}" = "qa-beta" ]]; then
    echo "PUSHING ${TRAVIS_BRANCH}"
    rm -rf ./build/.git
    .travis/release.sh "${TRAVIS_BRANCH}"
fi
