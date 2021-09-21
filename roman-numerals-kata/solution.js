// 1 - I
// 5 - V
// 10 - X
// 50 - L
// 100 - C
// 500 - D
// 1000 - M

// I
// II
// III
// IV
// V
// VI
// VII
// VIII
// IX
// X
// pattern => no symbols are repeated more than 3 times

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
