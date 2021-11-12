const { convert } = require('./solution')

describe('Convert', () => {

	it('Should return "I" if argument is 1', () => {
		const answer = convert(1)
		expect(answer).toBe('I')
	})

	it('Should return "II" if argument is 2', () => {
		const answer = convert(2)
		expect(answer).toBe('II')
	})

	// // this is not really necessary since the previous test case covers it
	// it('Should return "III" if argument is 3', () => {
	// 	const answer = convert(3)
	// 	expect(answer).toBe('III')
	// })

	it('Should return \"IV\" if argument is 4', () => {
		const answer = convert(4)
		expect(answer).toBe('IV')
	})

	it('Should return "V" if argument is 5', () => {
		const answer = convert(5)
		expect(answer).toBe('V')
	})

	it('Should return "X" if argument is 10', () => {
		const answer = convert(10)
		expect(answer).toBe('X')
	})

	it('Should return "XI" if argument is 11', () => {
		const answer = convert(11)
		expect(answer).toBe('XI')
	})

	it('Should return "XXIV" if argument is 24', () => {
		const answer = convert(24)
		expect(answer).toBe('XXIV')
	})

	it('Should return "XXXIX" if argument is 39', () => {
		const answer = convert(39)
		expect(answer).toBe('XXXIX')
	})

	it('Should return "XL" if argument is 40', () => {
		const answer = convert(40)
		expect(answer).toBe('XL')
	})

	it('Should return "XLII" if argument is 42', () => {
		const answer = convert(42)
		expect(answer).toBe('XLII')
	})

	it('Should return "LXVIII" if argument is 68', () => {
		const answer = convert(68)
		expect(answer).toBe('LXVIII')
	})

	it('Should return "CIX" if argument is 109', () => {
		const answer = convert(109)
		expect(answer).toBe('CIX')
	})

	it('Should return "CXXIX" if argument is 129', () => {
		const answer = convert(129)
		expect(answer).toBe('CXXIX')
	})

	it('Should return "CCXXXVIII" if argument is 238', () => {
		const answer = convert(238)
		expect(answer).toBe('CCXXXVIII')
	})

	it('Should return "CCCIXIX" if argument is 399', () => {
		const answer = convert(399)
		expect(answer).toBe('CCCXCIX')
	})

	it('Should return "CDLVI" if argument is 456', () => {
		const answer = convert(456)
		expect(answer).toBe('CDLVI')
	})

	it('Should return "CMXCIX" if argument is 999', () => {
		const answer = convert(999)
		expect(answer).toBe('CMXCIX')
	})

	it('Should return "M" if argument is 1000', () => {
		const answer = convert(1000)
		expect(answer).toBe('M')
	})

})

