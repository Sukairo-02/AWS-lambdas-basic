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

		let pos, val
		if (
			body.data.some((e, a) => {
				if (e > 0) {
					val = e
					pos = a
					return true
				}
				return false
			})
		) {
			return {
				statusCode: 200,
				body: JSON.stringify({ msg: 'Success!', val, pos }),
			}
		} else {
			return {
				statusCode: 401,
				body: JSON.stringify({
					msg: 'No positive values found in input array!',
				}),
			}
		}
	} catch (e) {
		console.log(e)
		return {
			statusCode: 500,
			body: JSON.stringify({ msg: 'Something went wrong...', error: e }),
		}
	}
}
