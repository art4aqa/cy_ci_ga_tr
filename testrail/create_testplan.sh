export TESTRAIL_USERNAME=$TESTRAIL_USERNAME
export TESTRAIL_PASSWORD=$TESTRAIL_PASSWORD

TEST_RUN_INFO=$(
	curl -H "Content-Type: application/json" \
-u $TESTRAIL_USERNAME:$TESTRAIL_PASSWORD \
--request POST \
--data '{"name":"test run 1","description":"testing...", "suite_id":"4"}' \
"https://cyintegration.testrail.com/index.php?/api/v2/add_run/2"
)

echo "Hey, here is you run info:"
dest_dir=./run-info.json
echo "$TEST_RUN_INFO" >"$dest_dir"
test_run_id=$(jq '.id' $dest_dir)
echo "$TEST_RUN_INFO"
echo "TestRunId :$test_run_id"