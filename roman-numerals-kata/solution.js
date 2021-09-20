const convert = num => {

	const numberMapping = {
		5: 'V',
		10: 'X'
	}

	if (num < 5) {
		let answer = ''
		for (let i = 0; i < num; i++) {
			answer += 'I'
		}
		return answer
	} else {
		return numberMapping[num]
	}

}

module.exports = {
	convert
}