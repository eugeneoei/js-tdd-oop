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

    getTeamAScore() {
        return this.formatScore(this.#teamAScore)
    }

}

module.exports = ScoreKeeper