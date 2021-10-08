const { combination } = require('./solution')

const availableSpace = 250

describe('Combination', () => {

    it('Should return [50, 50, 50, 50, 50] when available wardrobe available sizes is 50', () => {

        const availableSizes = [50]
        const expectedResult = [
            [50, 50, 50, 50, 50]
        ]

        const result = combination(availableSpace, availableSizes)

        expect(result).toEqual(expectedResult)

    })

})
