# Sales tax problem

Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt. Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions.

When I purchase items I receive a receipt which lists the name of all the items and their price (including tax), finishing with the total cost of the items, and the total amounts of sales taxes paid. The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.

#### Input 1

```js
[
    {
        type: 'book',
        imported: false,
        name: 'Toy Story',
        price: 12.49
    },
    {
        type: 'tech',
        imported: false,
        name: 'Laptop',
        price: 14.99
    },
    {
        type: 'food',
        imported: false,
        name: 'Chocolate Bar',
        price: 0.85
    }
]
```

#### Expected Output 1

```
Toy Story: $12.49
Laptop: $16.49
Chocolate Bar: $0.85
Total tax: $1.50
Total (including tax): $29.83
```

---
#### Input 2

```js
[
    {
        type: 'food',
        imported: true,
        name: 'Box of Chocolates',
        price: 10
    },
    {
        type: 'tech',
        imported: true,
        name: 'Laptop',
        price: 47.50
    }
]
```

#### Expected Output 2

```
Box of Chocolates: $10.50
Laptop: $54.65
Total tax: $7.65
Total (including tax): $65.15
```

---

#### Input 3

```js
[
    {
        type: 'tech',
        imported: true,
        name: 'Desktop',
        price: 27.99
    },
    {
        type: 'tech',
        imported: false,
        name: 'Laptop',
        price: 18.99
    },
    {
        type: 'medical',
        imported: false,
        name: 'Paracetamol',
        price: 9.75
    },
    {
        type: 'food',
        imported: true,
        name: 'Box of Chocolates',
        price: 11.25
    }
]
```

#### Expected Output 3

```
Desktop: $32.19
Laptop: $20.89
Paracetamol: $9.75
Box of Chocolates: $11.85
Total tax: $6.70
Total (including tax): $74.68
```