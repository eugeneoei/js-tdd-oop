const solution = require('./solution')

it('Should print "1" if number is 1', () => {
	const num = 1
	console.log = jest.fn()

	solution(num)
	
	expect(console.log).toHaveBeenNthCalledWith(1, 1)
	expect(console.log).toHaveBeenCalledTimes(num)
})

it('Should print "1" and "2" if number is 2', () => {
	const num = 2
	console.log = jest.fn()

	solution(num)
	
	expect(console.log).toHaveBeenNthCalledWith(1, 1)
	expect(console.log).toHaveBeenNthCalledWith(2, 2)
	expect(console.log).toHaveBeenCalledTimes(num)
})

it('Should print "1", "2" and "Fizz" if number is 3', () => {
	const num = 3
	console.log = jest.fn()

	solution(num)
	
	expect(console.log).toHaveBeenNthCalledWith(1, 1)
	expect(console.log).toHaveBeenNthCalledWith(2, 2)
	expect(console.log).toHaveBeenNthCalledWith(3, 'Fizz')
	expect(console.log).toHaveBeenCalledTimes(num)
})

it('Should print "1", "2", "Fizz", "4", "Buzz" if number is 5', () => {
	const num = 5
	console.log = jest.fn()

	solution(num)
	
	expect(console.log).toHaveBeenNthCalledWith(1, 1)
	expect(console.log).toHaveBeenNthCalledWith(2, 2)
	expect(console.log).toHaveBeenNthCalledWith(3, 'Fizz')
	expect(console.log).toHaveBeenNthCalledWith(4, 4)
	expect(console.log).toHaveBeenNthCalledWith(5, 'Buzz')
	expect(console.log).toHaveBeenCalledTimes(num)
})

it('Should print "1", "2", "Fizz", "4", "Buzz", "6", "7", "8", "9" and "FizzBuzz" if number is 10', () => {
	const num = 10
	console.log = jest.fn()

	solution(num)
	
	expect(console.log).toHaveBeenNthCalledWith(1, 1)
	expect(console.log).toHaveBeenNthCalledWith(2, 2)
	expect(console.log).toHaveBeenNthCalledWith(3, 'Fizz')
	expect(console.log).toHaveBeenNthCalledWith(4, 4)
	expect(console.log).toHaveBeenNthCalledWith(5, 'Buzz')
	expect(console.log).toHaveBeenNthCalledWith(6, 'Fizz')
	expect(console.log).toHaveBeenNthCalledWith(7, 7)
	expect(console.log).toHaveBeenNthCalledWith(8, 8)
	expect(console.log).toHaveBeenNthCalledWith(9, 'Fizz')
	expect(console.log).toHaveBeenNthCalledWith(10, 'FizzBuzz')
	expect(console.log).toHaveBeenCalledTimes(num)
})

