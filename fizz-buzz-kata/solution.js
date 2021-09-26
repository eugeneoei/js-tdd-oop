const solution = num => {
	for (let i = 1; i < num + 1; i++) {
		const isMultipleOfThree = i % 3 === 0
		const isMultipleOfFive = i % 5 === 0
		if (isMultipleOfThree && isMultipleOfFive) {
			console.log('FizzBuzz')
		} else if (isMultipleOfThree) {
			console.log('Fizz')
		} else if (isMultipleOfFive) {
			console.log('Buzz')
		} else {
			console.log(i)
		}
	}
}

module.exports = solution