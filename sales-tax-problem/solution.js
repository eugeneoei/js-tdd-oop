const {
    ITEM_TYPES_EXEMPTED_FROM_BASIC_TAX,
    BASIC_SALES_TAX,
    IMPORT_TAX
} = require('./constants')

const roundAmountUpToNearestZeroPointZeroFive = amount => {
    const multiplier = 1 / 0.05
    return Math.ceil(amount * multiplier) / multiplier
}

const calculateTotal = items => {

    let totalIncludingTax = 0
    let totalTax = 0

    items.forEach(item => {
        const itemType = item.type
        const isItemImported = item.imported
        const itemPrice = item.price
        const itemName = item.name

        const basicTaxAmount = ITEM_TYPES_EXEMPTED_FROM_BASIC_TAX.includes(itemType) ? 0 : itemPrice * BASIC_SALES_TAX
        const importTaxAmount = isItemImported ? itemPrice * IMPORT_TAX : 0
        const itemTax = roundAmountUpToNearestZeroPointZeroFive(basicTaxAmount + importTaxAmount)
        const itemIncludingTax = itemPrice + itemTax

        totalTax += itemTax
        totalIncludingTax += itemIncludingTax

        console.log(`${itemName}: $${itemIncludingTax.toFixed(2)}`)

    })

    console.log(`Total tax: $${totalTax.toFixed(2)}`)
    console.log(`Total (including tax): $${totalIncludingTax.toFixed(2)}`)

}

module.exports = calculateTotal

// function roundByNum(num, rounder) {
//     var multiplier = 1/(rounder||0.5);
//     return Math.round(num*multiplier)/multiplier;
// }

// console.log(roundByNum(74.67)); //expected output 74.5
// console.log(roundByNum(74.67, 0.25)); //expected output 74.75
// console.log(roundByNum(74.67, 4)); //expected output 76