# Branch Protection
A GitHub Actions-based branch protection system.

## Model
- `codeowners.json` defines who can merge into which branch. These are the people who must merge in PRs into those branches.
- People who don't have permission to add commits to some branch will have their commits reverted by the action. The action will then return a non-zero exit code to send an email to the commiter that their code got rejected.
