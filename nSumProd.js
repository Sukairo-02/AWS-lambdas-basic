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
		const n = Number(body.n)
		const data = body.data
		if (!data || !data[0] || !n) {
			return {
				statusCode: 400,
				body: JSON.stringify({
					msg: 'Error: incorrect input!',
				}),
			}
		}

		let [sum, prod] = [0, 1]
		for (let i = 0; (i < data.length) & (i < n); ++i) {
			sum += data[i]
			prod *= data[i]
		}

		return {
			statusCode: 200,
			body: JSON.stringify({ msg: 'Success!', sum, prod }),
		}
	} catch (e) {
		console.log(e)
		return {
			statusCode: 500,
			body: JSON.stringify({ msg: 'Something went wrong...', error: e }),
		}
	}
}
