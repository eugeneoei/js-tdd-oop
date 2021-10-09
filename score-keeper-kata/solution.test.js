const ScoreKeeper = require('./solution')

describe('Team A score method', () => {

	it('should return 001 when scoreTeamA1 method is called once', () => {

		const scoreKeeper = new ScoreKeeper()
		const expectedResult = '001'

		scoreKeeper.scoreTeamA1()

		expect(scoreKeeper.getTeamAScore()).toBe(expectedResult)

	})

	it('should return 002 when scoreTeamA2 method is called once', () => {

		const scoreKeeper = new ScoreKeeper()
		const expectedResult = '002'

		scoreKeeper.scoreTeamA2()

		expect(scoreKeeper.getTeamAScore()).toBe(expectedResult)

	})

})
