const solution = (stringOne, stringTwo) => {

    const mapping = {}
    let result = ''

    for (let i = 0; i < stringTwo.length; i++) {
        const stringTwoLetter = stringTwo[i]
        mapping[stringTwoLetter] = true
    }

    for (let j = 0; j < stringOne.length; j++) {
        const stringOneLetter = stringOne[j]
        if (!mapping[stringOneLetter]) {
            result += stringOneLetter
        }
    }

    return result

}

module.exports = solution