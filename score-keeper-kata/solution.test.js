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

	it('should return 003 when scoreTeamA3 method is called once', () => {

		const scoreKeeper = new ScoreKeeper()
		const expectedResult = '003'

		scoreKeeper.scoreTeamA3()

		expect(scoreKeeper.getTeamAScore()).toBe(expectedResult)

	})

	it('should return 006 when scoreTeamA1, scoreTeamA2 and scoreTeamA3 methods are called once each', () => {

		const scoreKeeper = new ScoreKeeper()
		const expectedResult = '006'

		scoreKeeper.scoreTeamA1()
		scoreKeeper.scoreTeamA2()
		scoreKeeper.scoreTeamA3()

		expect(scoreKeeper.getTeamAScore()).toBe(expectedResult)

	})

})
