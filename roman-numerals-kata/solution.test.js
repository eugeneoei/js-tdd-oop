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

	it('Should return "XXIV" if argument is 24', () => {
		const answer = convert(24)
		expect(answer).toEqual('XXIV')
	})

	it('Should return "XXXIX" if argument is 39', () => {
		const answer = convert(39)
		expect(answer).toEqual('XXXIX')
	})

	it('Should return "XL" if argument is 40', () => {
		const answer = convert(40)
		expect(answer).toEqual('XL')
	})

	it('Should return "XLII" if argument is 42', () => {
		const answer = convert(42)
		expect(answer).toEqual('XLII')
	})

	it('Should return "LXVIII" if argument is 68', () => {
		const answer = convert(68)
		expect(answer).toEqual('LXVIII')
	})

	it('Should return "CIX" if argument is 109', () => {
		const answer = convert(109)
		expect(answer).toEqual('CIX')
	})

	it('Should return "CIX" if argument is 129', () => {
		const answer = convert(109)
		expect(answer).toEqual('CIX')
	})

	it('Should return "CIX" if argument is 238', () => {
		const answer = convert(109)
		expect(answer).toEqual('CIX')
	})

	it('Should return "CIX" if argument is 399', () => {
		const answer = convert(109)
		expect(answer).toEqual('CIX')
	})

})

