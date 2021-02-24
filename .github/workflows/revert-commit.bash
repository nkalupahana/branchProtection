#!/bin/bash

echo REJECT
git stash
git revert HEAD --no-edit
git status
git push
