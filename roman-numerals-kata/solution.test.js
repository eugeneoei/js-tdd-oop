const { convert } = require('./solution')

describe('Convert', () => {

	it('Should return "I" if argument is 1', () => {
		const answer = convert(1)
		expect(answer).toEqual('I')
	})

	it('Should return "II" if argument is 2', () => {
		const answer = convert(2)
		expect(answer).toEqual('II')
	})

	// // this is not really necessary since the previous test case covers it
	// it('Should return "III" if argument is 3', () => {
	// 	const answer = convert(3)
	// 	expect(answer).toEqual('III')
	// })

	it('Should return \"IV\" if argument is 4', () => {
		const answer = convert(4)
		expect(answer).toEqual('IV')
	})	

	it('Should return "V" if argument is 5', () => {
		const answer = convert(5)
		expect(answer).toEqual('V')
	})

	it('Should return "X" if argument is 10', () => {
		const answer = convert(10)
		expect(answer).toEqual('X')
	})

	it('Should return "XI" if argument is 11', () => {
		const answer = convert(11)
		expect(answer).toEqual('XI')
	})

})

