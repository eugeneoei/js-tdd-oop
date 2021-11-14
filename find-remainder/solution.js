const solution = (num, divisor) => {

    let currentValue = num

    while (currentValue >= divisor) {
        currentValue -= divisor
    }

    return currentValue

}

module.exports = solution