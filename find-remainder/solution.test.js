const solution = require('./solution')

describe('Find remainder', () => {

    it('Should return 1', () => {

        const number = 10
        const divisor = 3
        const expectedAnswer = 1

        const answer = solution(number, divisor)

        expect(answer).toBe(expectedAnswer)

    })

    it('Should return 0', () => {

        const number = 10
        const divisor = 5
        const expectedAnswer = 0

        const answer = solution(number, divisor)

        expect(answer).toBe(expectedAnswer)

    })

    it('Should return 7', () => {

        const number = 100
        const divisor = 7
        const expectedAnswer = 2

        const answer = solution(number, divisor)

        expect(answer).toBe(expectedAnswer)

    })

})