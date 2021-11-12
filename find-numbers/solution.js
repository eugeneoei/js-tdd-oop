const isNumberEven = num => num % 2 === 0

const isDivisibleBySeven = num => num % 7 === 0

const isSumOfIndividualDigitSeven = num => {
    const stringNumber = num.toString()
    const stringNumberInArray = stringNumber.split('')
    const sumOfIndividualDigits = stringNumberInArray.reduce(
        (previousValue, currentValue) => {
            return previousValue + parseInt(currentValue)
        }, 0
    )
    return sumOfIndividualDigits === 7
}

const solution = range => {

    const lowerBound = range[0]
    const upperBound = range[1]

    const result = []

    for (let i = lowerBound; i < upperBound + 1; i++) {
        if (
            (isNumberEven(i) && isDivisibleBySeven(i)) ||
            isSumOfIndividualDigitSeven(i)
        ) {
            result.push(i)
        }
    }

    return result

}

module.exports = solution