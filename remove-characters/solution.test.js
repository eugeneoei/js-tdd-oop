const solution = require('./solution')

test('Remove the letters in first string if any of its letters appear in second string', () => {

    const cases = [
        {
            stringOne: 'computer',
            stringTwo: 'cat',
            expectedOutput: 'ompuer'
        },
        {
            stringOne: 'occurrence',
            stringTwo: 'car',
            expectedOutput: 'ouene'
        },
        {
            stringOne: 'Javascript',
            stringTwo: 'jets',
            expectedOutput: 'Javacrip'
        },
        {
            stringOne: 'i/p:crazytechnogeeks',
            stringTwo: 'ae',
            expectedOutput: 'i/p:crzytchnogks'
        }
    ]

    cases.forEach(element => {
        const answer = solution(element.stringOne, element.stringTwo)

        expect(answer).toBe(element.expectedOutput)

    })

})
