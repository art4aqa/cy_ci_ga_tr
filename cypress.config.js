const { defineConfig } = require('cypress')
const Fs = require('fs')

module.exports = defineConfig({
	projectId: 'msbbu4',
	video: false,
	e2e: {
		baseUrl: 'https://www.saucedemo.com',
		setupNodeEvents(on, config) {
			on('after:run', (results) => {
				if (results) {
					const RUN_RESULTS = { results: [] },
						RESULTS_PATH = './testrail/results.json'
					// results will be undefined in interactive mode
					results.runs.forEach((run) => {
						run.tests.forEach((test) => {
							let caseId = titleToCaseIds(test.title[1])
							let status =
								test.state === 'passed'
									? 1
									: test.state === 'failed'
									? 5
									: test.state === 'blocked'
									? 2
									: test.state === 'pending'
									? 6
									: 3
							let result = { case_id: `${caseId}`, status_id: `${status}` }
							result.comment = test.body
							RUN_RESULTS.results.push(result)
							console.log(test)
							console.log('test:', test.title[1], test.state)
						})
					})
					console.log(RUN_RESULTS)
					writeToFile(RESULTS_PATH, RUN_RESULTS)
				}

				function titleToCaseIds(title) {
					var caseIds = []
					var testCaseIdRegExp = /\bT?C(\d+)\b/g
					var m
					while ((m = testCaseIdRegExp.exec(title)) !== null) {
						var caseId = parseInt(m[1])
						caseIds.push(caseId)
					}
					return caseIds
				}

				async function writeToFile(path, data) {
					const json = JSON.stringify(data, null, 2)

					try {
						await Fs.writeFile(path, json)
						console.log('Saved data to file.')
					} catch (error) {
						console.error(error)
					}
				}
			})
		},
	},
})
