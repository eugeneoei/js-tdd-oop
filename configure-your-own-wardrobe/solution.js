const findCombinations = (
	availableSpace,
	availableSizes
) => {

	availableSizes.sort((a, b) => a - b)
	const combinations = []

	const findCombo = (index, target, combo) => {
		const currentSum = combo.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
		if (currentSum === target) {
			combinations.push(combo)
			return
		}
		for (let i = index; i < availableSizes.length; i++) {
			const currentSize = availableSizes[i]
			if (currentSum + currentSize <= target) { // ensures sum of combo does not exceed target
				findCombo(i, target, [...combo, currentSize])
			}
		}
	}

	findCombo(0, availableSpace, [])

	return combinations

}

const findCheapestCombination = (combinations, prices) => {

	if (combinations.length === 0) {
		return 0
	}

	const combinationsPrices = combinations.map(combination => (
		combination.reduce(
			(previousValue, size) => previousValue + prices[size],
			0
		)
	))
	return Math.min(...combinationsPrices)

}

module.exports = {
	findCombinations,
	findCheapestCombination
}