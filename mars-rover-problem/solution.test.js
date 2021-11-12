const Rover = require('./solution')

describe('Rover', () => {

    it('Should rotate 90 degrees left when given the instruction "L"', () => {

        const space = '5 5'
        const startPosition = '1 2 N'
        const rover = new Rover(space, startPosition)

        rover.instruction('L')

        expect(rover.getCurrentPosition()).toBe('1 2 W')

    })

    it('Should rotate 90 degrees right when it starts at "1 2 N" and given the instruction "R"', () => {

        const space = '5 5'
        const startPosition = '1 2 N'
        const rover = new Rover(space, startPosition)

        rover.instruction('R')

        expect(rover.getCurrentPosition()).toBe('1 2 E')

    })

    it('Should move forward by 1 grid when it starts at "1 2 N" and given the instruction "M"', () => {

        const space = '5 5'
        const startPosition = '1 2 N'
        const rover = new Rover(space, startPosition)

        rover.instruction('M')

        expect(rover.getCurrentPosition()).toBe('1 3 N')

    })

    it('Should not move forward if it is at the edge', () => {

        const space = '5 5'
        const startPosition = '1 2 N'
        const rover = new Rover(space, startPosition)

        rover.instruction('LMM')

        expect(rover.getCurrentPosition()).toBe('0 2 W')

    })

})

describe('First Rover', () => {

    it('Should end at position "3 3 E" when it starts at "1 2 N" and given the instructions "LMLMLMLMM"', () => {

        const space = '5 5'
        const startPosition = '1 2 N'
        const rover = new Rover(space, startPosition)

        rover.instruction('LMLMLMLMM')

        expect(rover.getCurrentPosition()).toBe('1 3 N')

    })

})

describe('Second Rover', () => {

    it('Should end at position "5 1 E" when it starts at "3 3 E" and given the instructions "MMRMMRMRRM"', () => {

        const space = '5 5'
        const startPosition = '3 3 E'
        const rover = new Rover(space, startPosition)

        rover.instruction('MMRMMRMRRM')

        expect(rover.getCurrentPosition()).toBe('5 1 E')

    })

})