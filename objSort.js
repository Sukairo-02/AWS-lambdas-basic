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
		const data = body.data

		if (
			!data ||
			!data[0] ||
			!data.every((e) => {
				const bDate = new Date(e.birthDate)
				e.birthDate = bDate

				return (
					typeof e.firstName === 'string' &&
					typeof e.lastName === 'string' &&
					e.birthDate instanceof Date &&
					!isNaN(e.birthDate)
				)
			})
		) {
			return {
				statusCode: 400,
				body: JSON.stringify({
					msg: 'Error: incorrect input!',
				}),
			}
		}

		const sorted = data.sort(
			(a, b) =>
				a.firstName.localeCompare(b.firstName) ||
				a.lastName.localeCompare(b.lastName) ||
				b.birthDate - a.birthDate
		)

		return {
			statusCode: 200,
			body: JSON.stringify({ msg: 'Success!', sorted }),
		}
	} catch (e) {
		console.log(e)
		return {
			statusCode: 500,
			body: JSON.stringify({ msg: 'Something went wrong...', error: e }),
		}
	}
}
