#!/usr/bin/env bash
set -e
set -x

if [[ "${TRAVIS_BRANCH}" = "master" || "${TRAVIS_BRANCH}" = "main" ]]
then
    for env in ci qa stage
    do
        echo "PUSHING ${env}-beta"
        rm -rf ./dist/.git
        ./scripts/release.sh "${env}-beta"
    done
fi

if [ "${TRAVIS_BRANCH}" = "stable" ]
then
    for env in ci qa stage
    do
        echo "PUSHING ${env}-stable"
        rm -rf ./dist/.git
        ./scripts/release.sh "${env}-stable"
    done
fi

if [[ "${TRAVIS_BRANCH}" = "prod-beta" || "${TRAVIS_BRANCH}" = "prod-stable" ]]; then
    echo "PUSHING ${TRAVIS_BRANCH}"
    rm -rf ./build/.git
    ./scripts/release.sh "${TRAVIS_BRANCH}"
fi