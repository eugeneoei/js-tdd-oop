const ScoreKeeper = require('./solution')

describe('Scorekeeper Class', () => {

    describe('team A score is increased', () => {

        it('by 1 when scoreTeamA1 method is called', () => {

            const scoreKeeper = new ScoreKeeper()
            const expectedResult = '001'

            scoreKeeper.scoreTeamA1()

            expect(scoreKeeper.getTeamAScore()).toBe(expectedResult)

        })

    })

})
