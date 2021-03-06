// patterns
// => no symbol is repeated more than 3 times for any given integer ???
// => work with range of 10s???
// => with base case first ie I, V and X then incorporate next range of symbols???
// => look at numbers 1 - 10 first then 11 - 20

// const numberMapping = {
// 	0: '',
// 	1: 'I',
// 	2: 'II',
// 	3: 'III',
// 	4: 'IV',
// 	5: 'V',
// 	6: 'VI',
// 	7: 'VII',
// 	8: 'VIII',
// 	9: 'IX',
// 	10: 'X',
// }

const generateSymbols = (value, baseSymbol, midSymbol, peakSymbol) => {

	const symbolMapping = {
		0: '',
		1: baseSymbol,
		2: baseSymbol + baseSymbol,
		3: baseSymbol + baseSymbol + baseSymbol,
		4: baseSymbol + midSymbol,
		5: midSymbol,
		6: midSymbol + baseSymbol,
		7: midSymbol + baseSymbol + baseSymbol,
		8: midSymbol + baseSymbol + baseSymbol + baseSymbol,
		9: baseSymbol + peakSymbol,
		10: peakSymbol
	}

	return symbolMapping[value]
}

const convert = num => {

	const numberOfHundreds = Math.floor((num / 100) % 100)
	const numberOfTens = Math.floor((num / 10) % 10)
	const numberOfOnes = num % 10

	return `${
		generateSymbols(numberOfHundreds, 'C', 'D', 'M') // accounts for multiples of 100s from 101 - 1000
	}${
		generateSymbols(numberOfTens, 'X', 'L', 'C') // accounts for multiples of 10s from 11 - 100
	}${
		generateSymbols(numberOfOnes, 'I', 'V', 'X') // accounts for 1 - 10
	}`

}

module.exports = {
	convert
}
