const ScoreKeeper = require('./solution')

describe('ScoreKeeper class Team A score method', () => {

	it('should be 001 when scoreTeamA1 method is called once', () => {

		const scoreKeeper = new ScoreKeeper()
		const expectedResult = '001'

		scoreKeeper.scoreTeamA1()

		expect(scoreKeeper.getTeamAScore()).toBe(expectedResult)

	})

	it('should be 002 when scoreTeamA2 method is called once', () => {

		const scoreKeeper = new ScoreKeeper()
		const expectedResult = '002'

		scoreKeeper.scoreTeamA2()

		expect(scoreKeeper.getTeamAScore()).toBe(expectedResult)

	})

	it('should be 003 when scoreTeamA3 method is called once', () => {

		const scoreKeeper = new ScoreKeeper()
		const expectedResult = '003'

		scoreKeeper.scoreTeamA3()

		expect(scoreKeeper.getTeamAScore()).toBe(expectedResult)

	})

	it('should be 006 when scoreTeamA1, scoreTeamA2 and scoreTeamA3 methods are called once each', () => {

		const scoreKeeper = new ScoreKeeper()
		const expectedResult = '006'

		scoreKeeper.scoreTeamA1()
		scoreKeeper.scoreTeamA2()
		scoreKeeper.scoreTeamA3()

		expect(scoreKeeper.getTeamAScore()).toBe(expectedResult)

	})

	it('should be 036 when scoreTeamA1 is called 2 times, scoreTeamA2 is called 5 times and scoreTeamA3 is called 8 times', () => {

		const scoreKeeper = new ScoreKeeper()
		const numberOfTimesScoreTeamA1IsCalled = 2
		const numberOfTimesScoreTeamA2IsCalled = 5
		const numberOfTimesScoreTeamA3IsCalled = 8
		const expectedResult = '036'

		for (let i = 0; i < numberOfTimesScoreTeamA1IsCalled; i++) {
			scoreKeeper.scoreTeamA1()
		}
		for (let j = 0; j < numberOfTimesScoreTeamA2IsCalled; j++) {
			scoreKeeper.scoreTeamA2()
		}
		for (let k = 0; k < numberOfTimesScoreTeamA3IsCalled; k++) {
			scoreKeeper.scoreTeamA3()
		}

		expect(scoreKeeper.getTeamAScore()).toBe(expectedResult)

	})

	it('should be 132 when scoreTeamA1 is called 8 times, scoreTeamA2 is called 17 times and scoreTeamA3 is called 30 times', () => {

		const scoreKeeper = new ScoreKeeper()
		const numberOfTimesScoreTeamA1IsCalled = 8
		const numberOfTimesScoreTeamA2IsCalled = 17
		const numberOfTimesScoreTeamA3IsCalled = 30
		const expectedResult = '132'

		for (let i = 0; i < numberOfTimesScoreTeamA1IsCalled; i++) {
			scoreKeeper.scoreTeamA1()
		}
		for (let j = 0; j < numberOfTimesScoreTeamA2IsCalled; j++) {
			scoreKeeper.scoreTeamA2()
		}
		for (let k = 0; k < numberOfTimesScoreTeamA3IsCalled; k++) {
			scoreKeeper.scoreTeamA3()
		}

		expect(scoreKeeper.getTeamAScore()).toBe(expectedResult)

	})

})

describe('ScoreKeeper class Team B score method', () => {

	it('should be 001 when scoreTeamB1 method is called once', () => {

		const scoreKeeper = new ScoreKeeper()
		const expectedResult = '001'

		scoreKeeper.scoreTeamB1()

		expect(scoreKeeper.getTeamBScore()).toBe(expectedResult)

	})

	it('should be 002 when scoreTeamB2 method is called once', () => {

		const scoreKeeper = new ScoreKeeper()
		const expectedResult = '002'

		scoreKeeper.scoreTeamB2()

		expect(scoreKeeper.getTeamBScore()).toBe(expectedResult)

	})

	it('should be 003 when scoreTeamB3 method is called once', () => {

		const scoreKeeper = new ScoreKeeper()
		const expectedResult = '003'

		scoreKeeper.scoreTeamB3()

		expect(scoreKeeper.getTeamBScore()).toBe(expectedResult)

	})

	it('should be 006 when scoreTeamB1, scoreTeamB2 and scoreTeamB3 methods are called once each', () => {

		const scoreKeeper = new ScoreKeeper()
		const expectedResult = '006'

		scoreKeeper.scoreTeamB1()
		scoreKeeper.scoreTeamB2()
		scoreKeeper.scoreTeamB3()

		expect(scoreKeeper.getTeamBScore()).toBe(expectedResult)

	})

})