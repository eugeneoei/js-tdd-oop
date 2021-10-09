const combination = (
	availableSpace,
	availableSizes
) => {

	availableSizes.sort()
	const combinations = []

	const findCombo = (index, target, combo) => {
		const currentSum = combo.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
		if (currentSum === target) {
			console.log('push')
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

module.exports = {
	combination
}