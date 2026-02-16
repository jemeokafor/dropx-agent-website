# PRIME_COMPLETION_CONTRACT_V1

## 1) State Machine (mandatory)
`INIT -> BUILDING -> BLOCKED -> RESOLVING -> VERIFYING -> DEPLOYING -> QA_PASSED -> COMPLETE`

## 2) Mandatory Update Format
- State:
- Done:
- In progress:
- Blockers:
- Next checkpoint ETA:

## 3) Definition of Done
- Build succeeds in production mode.
- Critical images render.
- Core pages load (home/products/contact).
- Mobile + desktop sanity checks pass.
- Links/forms/CTAs validated.
- Deployment successful and public URL verified.

## 4) Required Evidence Pack
- Commit hash (deployed)
- Deployment ID + inspect URL
- Build output summary
- Screenshot paths (before/after)
- QA checklist PASS/FAIL with timestamps (WAT)

## 5) Safe Rollback Policy
Default rollback must be one of:
1. Release tag rollback + redeploy
2. `git revert` rollback + redeploy

Do not default to `git push --force`.

## 6) Incident Transparency Rule
- Forward surface: announce blocker immediately with next action.
- Backward surface: include root cause + corrective action in final report.
