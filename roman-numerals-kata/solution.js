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

// patterns
// => no symbol is repeated more than 3 times for any given integer ???
// => work with range of 10s???
// => with base case first ie I, V and X then incorporate next range of symbols???
// => look at numbers 1 - 10 first then 11 - 20

const numberMapping = {
	1: 'I',
	2: 'II',
	3: 'III',
	4: 'IV',
	5: 'V',
	6: 'VI',
	7: 'VII',
	8: 'VIII',
	9: 'IX',
	10: 'X',
}

const convert = num => {

	return numberMapping[num]

}

module.exports = {
	convert
}
