const { findCombinations, findCheapestCombination } = require('./solution')

const availableSpace = 250
const prices = {
	50: 59,
	75: 62,
	100: 90,
	120: 111
}

describe('Combination', () => {

	it('Should return [50, 50, 50, 50, 50] when available wardrobe available sizes is "[50]"', () => {

		const availableSizes = [50]
		const expectedResult = [
			[50, 50, 50, 50, 50]
		]

		const result = findCombinations(availableSpace, availableSizes)

		expect(result).toEqual(expectedResult)

	})

	it('Should return [] when available wardrobe available sizes is "[75]"', () => {

		const availableSizes = [75]
		const expectedResult = []

		const result = findCombinations(availableSpace, availableSizes)

		expect(result).toEqual(expectedResult)

	})

	it(`Should return [
		[50, 50, 50, 50, 50],
		[50, 50, 75, 75]
	] when available wardrobe sizes is [50, 75]`, () => {

		const availableSizes = [50, 75]
		const expectedResult = [
			[50, 50, 50, 50, 50],
			[50, 50, 75, 75]
		]

		const result = findCombinations(availableSpace, availableSizes)

		expect(result).toEqual(expectedResult)

	})

	it(`Should return [
		[50, 50, 50, 50, 50],
		[50, 50, 50, 100],
		[50, 50, 75, 75],
		[50, 100, 100],
		[75, 75, 100]
	] when available wardrobe sizes is [50, 75, 100]`, () => {

		const availableSizes = [50, 75, 100]
		const expectedResult = [
			[50, 50, 50, 50, 50],
			[50, 50, 50, 100],
			[50, 50, 75, 75],
			[50, 100, 100],
			[75, 75, 100]
		]

		const result = findCombinations(availableSpace, availableSizes)

		expect(result).toEqual(expectedResult)

	})

	it(`Should return [
		[50, 50, 50, 50, 50],
		[50, 50, 50, 100],
		[50, 50, 75, 75],
		[50, 100, 100],
		[75, 75, 100]
	] when available wardrobe sizes is [75, 50, 100]`, () => {

		const availableSizes = [75, 50, 100]
		const expectedResult = [
			[50, 50, 50, 50, 50],
			[50, 50, 50, 100],
			[50, 50, 75, 75],
			[50, 100, 100],
			[75, 75, 100]
		]

		const result = findCombinations(availableSpace, availableSizes)

		expect(result).toEqual(expectedResult)

	})

	it(`Should return [
		[50, 50, 50, 50, 50],
		[50, 50, 50, 100],
		[50, 50, 75, 75],
		[50, 100, 100],
		[75, 75, 100]
	] when available wardrobe sizes is [50, 75, 100, 120]`, () => {

		const availableSizes = [50, 75, 100]
		const expectedResult = [
			[50, 50, 50, 50, 50],
			[50, 50, 50, 100],
			[50, 50, 75, 75],
			[50, 100, 100],
			[75, 75, 100]
		]

		const result = findCombinations(availableSpace, availableSizes)

		expect(result).toEqual(expectedResult)

	})

})

describe('Cheapest Combination', () => {

	it('Should return 295 when available wardrobe sizes is [50]', () => {

		const availableSizes = [50]
		const expectedResult = 295

		const combinations = findCombinations(availableSpace, availableSizes)
		const priceOfCheapestCombination = findCheapestCombination(combinations, prices)

		expect(priceOfCheapestCombination).toBe(expectedResult)

	})

	it('Should return 0 when available wardrobe available sizes is "[75]"', () => {

		const availableSizes = [75]
		const expectedResult = 0

		const combinations = findCombinations(availableSpace, availableSizes)
		const priceOfCheapestCombination = findCheapestCombination(combinations, prices)

		expect(priceOfCheapestCombination).toBe(expectedResult)

	})

})