# Remove characters from first string which are in second

Given 2 strings, remove the characters from the first string which are present in second string (with case sensitivity).

### Case 1

Input:

```js
const stringOne = 'computer'
const stringTwo = 'cat'
```

Expected Output:

```js
ompuer
```

### Case 2

Input:

```js
const stringOne = 'occurrence'
const stringTwo = 'car'
```

Expected Output:

```js
ouene
```

### Case 3

Input:

```js
const stringOne = 'Javascript'
const stringTwo = 'jets'
```

Expected Output:

```js
Javacrip
```

### Case 4

Input:

```js
const stringOne = 'i/p:crazytechnogeeks'
const stringTwo = 'ae'
```

Expected Output:

```js
i/p:crzytchnogks
```