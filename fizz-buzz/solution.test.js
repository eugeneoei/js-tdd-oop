const { solution } = require('./solution')

it('Should return "Fizz" if number is 1', () => {
	const answer = solution(1)
	expect(answer).toEqual('Fizz')
})