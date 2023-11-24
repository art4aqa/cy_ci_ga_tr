export TESTRAIL_USERNAME=$TESTRAIL_USERNAME
export TESTRAIL_PASSWORD=$TESTRAIL_PASSWORD
current_time=$(date "+%Y.%m.%d-%H.%M.%S")
suite_id=4

TEST_RUN_INFO=$(
	curl -H "Content-Type: application/json" \
-u $TESTRAIL_USERNAME:$TESTRAIL_PASSWORD \
--request POST \
--data "{\"name\": \"test run $current_time\",\"description\": \"testing...\", \"suite_id\": \"$suite_id\"}" \
"https://cyintegration.testrail.com/index.php?/api/v2/add_run/2"
)

echo "Hey, here is you run info:"
dest_dir=./run-info.json
echo "$TEST_RUN_INFO" >"$dest_dir"
test_run_id=$(jq '.id' $dest_dir)
echo "$TEST_RUN_INFO"
echo "TestRunId :$test_run_id"