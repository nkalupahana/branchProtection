#!/bin/bash

echo REJECT
git stash
git config --global user.email "branchprotection"
git config --global user.name "branchprotection"
git revert HEAD --no-edit
git status
git push
