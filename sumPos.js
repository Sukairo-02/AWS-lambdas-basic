exports.handler = async (event) => {
	try {
		if (!event || !event.body) {
			return {
				statusCode: 400,
				body: JSON.stringify({
					msg: 'Error: incorrect input!',
				}),
			}
		}

		const body = JSON.parse(event.body)
		if (!body.data || !body.data[0]) {
			return {
				statusCode: 400,
				body: JSON.stringify({
					msg: 'Error: incorrect input!',
				}),
			}
		}

		let sum = 0
		body.data.forEach((e) => (sum += e > 0 ? e : 0))
		return {
			statusCode: 200,
			body: JSON.stringify({
				msg: 'Success!',
				sum,
			}),
		}
	} catch (e) {
		console.log(e)
		return {
			statusCode: 500,
			body: JSON.stringify({ msg: 'Something went wrong...', error: e }),
		}
	}
}
