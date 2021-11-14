// position = 'x, y, NSEW'
// L = rotate left 90 degrees
// R = rotate right 90 degrees
// M = move forward by 1 grid point in current direction

const rotation = {
    N: {
        L: 'W',
        R: 'E'
    },
    S: {
        L: 'E',
        R: 'W'
    },
    E: {
        L: 'N',
        R: 'S'
    },
    W: {
        L: 'S',
        R: 'N'
    }
}

class Planet {

    #leftEdge
    #rightEdge
    #topEdge
    #bottomEdge

    constructor(space) {
        const edges = space.split(' ')
        this.#leftEdge = 0
        this.#rightEdge = edges[0]
        this.#topEdge = edges[1]
        this.#bottomEdge = 0
    }

    getLeftEdge() {
        return this.#leftEdge
    }

    getRightEdge() {
        return this.#rightEdge
    }

    getTopEdge() {
        return this.#topEdge
    }

    getBottomEdge() {
        return this.#bottomEdge
    }

}

class Rover {

    #planet
    #x
    #y
    #facing

    constructor(planet, startPosition) {
        const position = startPosition.split(' ')
        this.#planet = planet
        this.#x = parseInt(position[0])
        this.#y = parseInt(position[1])
        this.#facing = position[2]
    }

    getCurrentPosition() {
        return `${this.#x} ${this.#y} ${this.#facing}`
    }

    rotate(direction) {
        this.#facing = rotation[this.#facing][direction]
    }

    moveForward() {
        switch (this.#facing) {
            case 'N':
                if (this.#y < this.#planet.getTopEdge()) {
                    this.#y += 1
                }
                break

            case 'S':
                if (this.#y > this.#planet.getBottomEdge()) {
                    this.#y -= 1
                }
                break

            case 'E':
                if (this.#x < this.#planet.getRightEdge()) {
                    this.#x += 1
                }
                break

            case 'W':
                if (this.#x > this.#planet.getLeftEdge()) {
                    this.#x -= 1
                }
                break

            default:
                break
        }
    }

    instruction(letters) {
        letters.split('').forEach(letter => {
            switch (letter) {
                case 'L':
                    this.rotate('L')
                    break

                case 'R':
                    this.rotate('R')
                    break

                case 'M':
                    this.moveForward()
                    break

                default:
                    break
            }
        })
    }

}

module.exports = {
    Planet,
    Rover
}