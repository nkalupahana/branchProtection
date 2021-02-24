#!/bin/bash

echo REJECT
git diff
git revert HEAD --no-edit
git status
git push
