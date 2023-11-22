## CircleCi

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/2ZtfsLBW1ANB3wBFAx75Ai/VgTpSgnbVa11j7hSNoWcQv/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/2ZtfsLBW1ANB3wBFAx75Ai/VgTpSgnbVa11j7hSNoWcQv/tree/main)

# cypress_demo_art_p

this is a demo project for cypress automation

## Instructions:

```
npm install
```

```
npx cypress open
```

## CircleCi integration

1. Create a project
2. Configure config.yml
3. Add github trigger

```
ssh-keygen -t ed25519 -f ~/.ssh/project_key -C email@email.com
pbcopy < ~/.ssh/project_key // circleci
pbcopy < ~/.ssh/project_key.pub // for github
```

4. Env variables

```
CYPRESS_RECORD_KEY

TESTRAIL_PASSWORD

TESTRAIL_PROJECT_ID

TESTRAIL_SUITE_ID

TESTRAIL_USERNAME
```

## TestRail integration

1. Create TestRun

```
curl -H "Content-Type: application/json" \
-u $TESTRAIL_USERNAME:$TESTRAIL_PASSWORD \
--request POST \
--data '{"name":"test run 1","description":"testing...", "suite_id":"4"}' \
"https://<domain>.testrail.com/index.php?/api/v2/add_run/2"
```

2. Post results

```
curl -X POST \
	-H "Content-Type: application/json" \
	-u $TESTRAIL_USERNAME:$TESTRAIL_PASSWORD \
	-d @"./testrail/results.json" \
"https://<domain>.testrail.com/index.php?/api/v2/add_results_for_cases/$test_run_id"
```
