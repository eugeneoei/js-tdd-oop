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