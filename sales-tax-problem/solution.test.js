// const { expect } = require('@jest/globals')
const calculateTotal = require('./solution')
const {
    BOOK_TYPE,
    FOOD_TYPE,
    MEDICAL_TYPE,
    TECHNOLOGY_TYPE
} = require('./constants')

test('Calculate total amount, tax and item breakdown for 1 book at 12.49, 1 laptop at 14.99, 1 chocolate bar at 0.85', () => {

    const items = [
        {
            type: BOOK_TYPE,
            imported: false,
            name: 'Toy Story',
            price: 12.49
        },
        {
            type: TECHNOLOGY_TYPE,
            imported: false,
            name: 'Laptop',
            price: 14.99
        },
        {
            type: FOOD_TYPE,
            imported: false,
            name: 'Chocolate Bar',
            price: 0.85
        }
    ]
    console.log = jest.fn()

    calculateTotal(items)

    expect(console.log).toHaveBeenNthCalledWith(1, 'Toy Story: $12.49')
    expect(console.log).toHaveBeenNthCalledWith(2, 'Laptop: $16.49')
    expect(console.log).toHaveBeenNthCalledWith(3, 'Chocolate Bar: $0.85')
	expect(console.log).toHaveBeenNthCalledWith(4, 'Total tax: $1.50')
	expect(console.log).toHaveBeenNthCalledWith(5, 'Total (including tax): $29.83')

})

test('Calculate total amount, tax and item breakdown for 1 imported box of chocolates at 10.00, 1 imported laptop at 47.50', () => {

    const items = [
        {
            type: FOOD_TYPE,
            imported: true,
            name: 'Box of Chocolates',
            price: 10
        },
        {
            type: TECHNOLOGY_TYPE,
            imported: true,
            name: 'Laptop',
            price: 47.50
        }
    ]
    console.log = jest.fn()

    calculateTotal(items)

    expect(console.log).toHaveBeenNthCalledWith(1, 'Box of Chocolates: $10.50')
    expect(console.log).toHaveBeenNthCalledWith(2, 'Laptop: $54.65')
	expect(console.log).toHaveBeenNthCalledWith(3, 'Total tax: $7.65')
	expect(console.log).toHaveBeenNthCalledWith(4, 'Total (including tax): $65.15')

})

test('Calculate total amount, tax and item breakdown for 1 imported desktop at 27.99, 1 laptop at 18.99, 1 paracetamol at 9.75, 1 imported box of chocolates at 11.25', () => {

    const items = [
        {
            type: TECHNOLOGY_TYPE,
            imported: true,
            name: 'Desktop',
            price: 27.99
        },
        {
            type: TECHNOLOGY_TYPE,
            imported: false,
            name: 'Laptop',
            price: 18.99
        },
        {
            type: MEDICAL_TYPE,
            imported: false,
            name: 'Paracetamol',
            price: 9.75
        },
        {
            type: FOOD_TYPE,
            imported: true,
            name: 'Box of Chocolates',
            price: 11.25
        }
    ]
    console.log = jest.fn()

    calculateTotal(items)

    expect(console.log).toHaveBeenNthCalledWith(1, 'Desktop: $32.19')
    expect(console.log).toHaveBeenNthCalledWith(2, 'Laptop: $20.89')
    expect(console.log).toHaveBeenNthCalledWith(3, 'Paracetamol: $9.75')
    expect(console.log).toHaveBeenNthCalledWith(4, 'Box of Chocolates: $11.85')
	expect(console.log).toHaveBeenNthCalledWith(5, 'Total tax: $6.70')
	expect(console.log).toHaveBeenNthCalledWith(6, 'Total (including tax): $74.68')

})
