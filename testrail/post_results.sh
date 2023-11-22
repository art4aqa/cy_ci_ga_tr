export TESTRAIL_USERNAME=$TESTRAIL_USERNAME
export TESTRAIL_PASSWORD=$TESTRAIL_PASSWORD

echo "Hey, here is you run info:"
dest_dir=./run-info.json
test_run_id=$(jq '.id' $dest_dir)
echo "TestRunId :$test_run_id"

RUN_INFO=$(
	curl -X POST \
	-H "Content-Type: application/json" \
	-u $TESTRAIL_USERNAME:$TESTRAIL_PASSWORD \
	-d @"./testrail/results.json" \
"https://cyintegration.testrail.com/index.php?/api/v2/add_results_for_cases/$test_run_id"
)
echo "$RUN_INFO"