# Find numbers

Given an array of length 2 representing a range (inclusive), return an array of numbers that satisfies any of the following conditions:

- even and divisible by 7
- sum of individual digit is 7

<!-- Find numbers 1-1000 which are even and divisible by 7 and also sum of individual digit is 7. -->

### Case 1

Input:

```js
const range = [1, 20]
```

Expected Output:

```js
[14, 16]
```

### Case 2

Input:

```js
const range = [1, 50]
```

Expected Output:

```js
[14, 16, 25, 28, 34, 42, 43]
```

### Case 2

Input:

```js
const range = [20, 40]
```

Expected Output:

```js
[25, 28, 34]
```