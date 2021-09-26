const solution = require('./solution')

it('Should print "1" if number is 1', () => {
	// const answer = solution(1)
	// expect(answer).toEqual(1)
	solution(1)
	console.log = jest.fn()
	// expect(console.log).toHaveBeenLastCalledWith(1)
	expect(console.log).toHaveBeenCalledWith(1)
})




// test('Hello World should return "Hello World!"', () => {
//   expect(HelloWorld()).toBe('Oh oh ...');
// });