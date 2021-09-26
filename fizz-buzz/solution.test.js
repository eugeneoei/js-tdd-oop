const solution = require('./solution')

it('Should print "1" if number is 1', () => {
	console.log = jest.fn()

	solution(1)
	
	expect(console.log).toHaveBeenCalledWith(1)
})




// test('Hello World should return "Hello World!"', () => {
//   expect(HelloWorld()).toBe('Oh oh ...');
// });