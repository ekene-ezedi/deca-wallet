#!/usr/bin/env bash
if [[ $TRAVIS_PULL_REQUEST == “false” ]] && [[ $TRAVIS_BRANCH == “main” ]]
then 
    COVERALLS_REPO_TOKEN=$coveralls_repo_token npm run coveralls 
fi