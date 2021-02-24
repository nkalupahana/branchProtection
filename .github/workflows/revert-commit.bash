#!/bin/bash

echo REJECT
git revert HEAD --no-edit
git status
git push
