# Branch Protection
A GitHub Actions-based branch protection system.

## Model
- `codeowners.yml` defines who can merge into which branch. These are the people who must merge in PRs into those branches.
- People who don't have perms to add commits to some branch will have their commits reverted by the action.
