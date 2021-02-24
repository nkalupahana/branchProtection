#!/bin/bash

echo REJECT
git revert --no-edit HEAD~1
git status
git push
