## CircleCi

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/3wpbqkvAsucz787stKvtb4/PrwxsnPXzoFnPKeZ1PPoZ2/tree/main.svg?style=svg&circle-token=b41e288b1cba60a3bba8fe291895cfd99eae3f91)](https://dl.circleci.com/status-badge/redirect/circleci/3wpbqkvAsucz787stKvtb4/PrwxsnPXzoFnPKeZ1PPoZ2/tree/main)

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
