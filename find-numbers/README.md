# Find numbers

Write a function that accepts an array of length 2 representing a range (inclusive) and return an array of numbers that satisfies any of the 2 following conditions:

- even and divisible by 7
- sum of individual digit is 7

### Case 1

Input:

```js
const range = [1, 20]
```

Expected Output:

```js
[7, 14, 16]
```

### Case 2

Input:

```js
const range = [1, 50]
```

Expected Output:

```js
[7, 14, 16, 25, 28, 34, 42, 43]
```

### Case 3

Input:

```js
const range = [20, 40]
```

Expected Output:

```js
[25, 28, 34]
```

### Case 4

Input:

```js
const range = [1, 1000]
```

Expected Output:

```js
[
    7, 14, 16, 25, 28, 34, 42, 43, 52, 56, 61, 70,
    84, 98, 106, 112, 115, 124, 126, 133, 140, 142, 151, 154,
    160, 168, 182, 196, 205, 210, 214, 223, 224, 232, 238, 241,
    250, 252, 266, 280, 294, 304, 308, 313, 322, 331, 336, 340,
    350, 364, 378, 392, 403, 406, 412, 420, 421, 430, 434, 448,
    462, 476, 490, 502, 504, 511, 518, 520, 532, 546, 560, 574,
    588, 601, 602, 610, 616, 630, 644, 658, 672, 686, 700, 714,
    728, 742, 756, 770, 784, 798, 812, 826, 840, 854, 868, 882,
    896, 910, 924, 938, 952, 966, 980, 994
]
```