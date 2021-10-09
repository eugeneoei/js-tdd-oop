class ScoreKeeper {

	#teamAScore
	#teamBScore

	constructor() {
		this.#teamAScore = 0
		this.#teamBScore = 0
	}

	formatScore(score) {
		if (score < 10) {
			return `00${score}`
		} else if (score < 100) {
			return `0${score}`
		} else {
			return `${score}`
		}
	}

	scoreTeamA1() {
		this.#teamAScore += 1
	}

	scoreTeamA2() {
		this.#teamAScore += 2
	}

	scoreTeamA3() {
		this.#teamAScore += 3
	}

	scoreTeamB1() {
		this.#teamBScore += 1
	}

	scoreTeamB2() {
		this.#teamBScore += 2
	}

	scoreTeamB3() {
		this.#teamBScore += 3
	}

	getTeamAScore() {
		return this.formatScore(this.#teamAScore)
	}

	getTeamBScore() {
		return this.formatScore(this.#teamBScore)
	}

}

module.exports = ScoreKeeper