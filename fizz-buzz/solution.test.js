const solution = require('./solution')

it('Should print "1" if number is 1', () => {
	console.log = jest.fn()

	solution(1)
	
	expect(console.log).toHaveBeenCalledWith(1)
})

it('Should print "1" and "2" if number is 2', () => {
	console.log = jest.fn()

	solution(2)
	
	expect(console.log).toHaveBeenCalledWith(1)
	expect(console.log).toHaveBeenCalledWith(2)
})

it('Should print "1", "2" and "Fizz" if number is 3', () => {
	console.log = jest.fn()

	solution(3)
	
	expect(console.log).toHaveBeenCalledWith(1)
	expect(console.log).toHaveBeenCalledWith(2)
	expect(console.log).toHaveBeenCalledWith('Fizz')
})




// test('Hello World should return "Hello World!"', () => {
//   expect(HelloWorld()).toBe('Oh oh ...');
// });