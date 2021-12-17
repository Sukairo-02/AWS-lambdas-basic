exports.handler = async (event) => {
	try {
		const today = new Date()
		const yearDayZero = new Date(`01.01.${today.getFullYear()}, 00:00:00`)
		const dayNum = Math.ceil(
			(today.getTime() - yearDayZero.getTime()) / 86400000
		)
		return {
			statusCode: 200,
			body: JSON.stringify({ msg: 'Success!', dayNum }),
		}
	} catch (e) {
		console.log(e)
		return {
			statusCode: 500,
			body: JSON.stringify({ msg: 'Something went wrong...', error: e }),
		}
	}
}
