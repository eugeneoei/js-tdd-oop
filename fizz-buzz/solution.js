const solution = num => {
	for (let i = 1; i < num + 1; i++) {
		if (i % 3 === 0) {
			console.log('Fizz')
		} else {
			console.log(i)
		}
	}
}

module.exports = solution