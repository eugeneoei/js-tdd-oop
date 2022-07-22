- Don’t have to test constructors
- Leave blank between arrange act assert

```js
test('Hello World should return "Hello World!"', () => {
	expect(HelloWorld()).toBe('Oh oh ...')
})
```

- Caching mechanisms - 4 in total. Know what are the tradeoffs

- use `toBe` for primitive values
- use `toEqual` for non-primitive values

# Question

- To write a function that returns 1 if the value input is a prime number and the lowest common multiple if its not.
- Write a program to add two strings without utilizing the + operator.
- Why do we use inner join and outer join? Give a proper reason.
- Write a function to take an argument and return 0 if the given number is prime else in other cases return -1
- https://placement.freshersworld.com/thoughtworks-placement-papers/whole-testpaper/33135665
- https://leetcode.com/discuss/interview-question/1149405/Thoughtworks-or-Live-Interview-or-Domain-Modeling-(DDD)