const solution = require('./solution')

it('Should print "1" if number is 1', () => {
	const num = 1
	console.log = jest.fn()

	solution(num)
	
	expect(console.log).toHaveBeenCalledWith(1)
	expect(console.log).toHaveBeenNthCalledWith(1, 1)
	expect(console.log).toHaveBeenCalledTimes(num)
})

it('Should print "1" and "2" if number is 2', () => {
	const num = 2
	console.log = jest.fn()

	solution(num)
	
	expect(console.log).toHaveBeenCalledWith(1)
	expect(console.log).toHaveBeenCalledWith(2)
	expect(console.log).toHaveBeenNthCalledWith(1, 1)
	expect(console.log).toHaveBeenNthCalledWith(2, 2)
	expect(console.log).toHaveBeenCalledTimes(num)
})

it('Should print "1", "2" and "Fizz" if number is 3', () => {
	const num = 3
	console.log = jest.fn()

	solution(num)
	
	expect(console.log).toHaveBeenCalledWith(1)
	expect(console.log).toHaveBeenCalledWith(2)
	expect(console.log).toHaveBeenCalledWith('Fizz')
	expect(console.log).toHaveBeenNthCalledWith(1, 1)
	expect(console.log).toHaveBeenNthCalledWith(2, 2)
	expect(console.log).toHaveBeenNthCalledWith(3, 'Fizz')
	expect(console.log).toHaveBeenCalledTimes(num)
})

it('Should print "1", "2", "Fizz", "4", "Buzz" if number is 5', () => {
	const num = 5
	console.log = jest.fn()

	solution(num)
	
	expect(console.log).toHaveBeenCalledWith(1)
	expect(console.log).toHaveBeenCalledWith(2)
	expect(console.log).toHaveBeenCalledWith('Fizz')
	expect(console.log).toHaveBeenCalledWith(4)
	expect(console.log).toHaveBeenCalledWith('Buzz')
	expect(console.log).toHaveBeenNthCalledWith(1, 1)
	expect(console.log).toHaveBeenNthCalledWith(2, 2)
	expect(console.log).toHaveBeenNthCalledWith(3, 'Fizz')
	expect(console.log).toHaveBeenNthCalledWith(4, 4)
	expect(console.log).toHaveBeenNthCalledWith(5, 'Buzz')
	expect(console.log).toHaveBeenCalledTimes(num)
})




// test('Hello World should return "Hello World!"', () => {
//   expect(HelloWorld()).toBe('Oh oh ...');
// });