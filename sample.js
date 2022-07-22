const person = {
    name: 'eugene',
    age: 19
}

// Object.entries(person).map(([key, value]) => {
//     console.log(`${key} is ${value}`)
// })

// for (const key in person) {
//     console.log(key)
// }

const fruits = ['apple', 'orange']

for (const index in fruits) { // returns array of index
    console.log(index)
}

for (const value of fruits) { // returns element in array
    console.log(value)
}
