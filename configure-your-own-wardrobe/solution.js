const combination = (
    availableSpace,
    availableSizes
) => {

    const result = []

    for (let i = 0; i < availableSizes.length; i++) {
        const size = availableSizes[i]
        if (availableSpace % size === 0) {
            const numberOfSizeInCombination = availableSpace/size
            result.push(
                Array.from(
                    { length: numberOfSizeInCombination },
                    () => 50
                )
            )
        }
    }

    return result

}

module.exports = {
    combination
}