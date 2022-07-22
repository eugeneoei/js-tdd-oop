# iPod inventory problem

<!-- A company sells ipods online. There are 100 stocks maintained at Argentina and Brazil. A single ipod costs $100 in Brazil and $50 in Argentina. The cost of exporting stocks from one country to the other will cost $400 per 10 blocks. The transportation is always done in the multiples of 10. Calculate the minimum cost for purchasing the given no of units. Assume that for each transaction, the available stock in each country is maintained to be 100. -->

<!-- http://placementgroup.blogspot.com/2013/01/thought-works.html -->

A company has started selling ipods online.

i) The company has inventories in Brazil and Argentina. Each inventory has only 100 ipods.

ii) Ipods in Brazil are sold at $100 per unit while ipods in Argentina are sold at $50 per unit.

iii) After every order, the stock levels in both Brazil and Argentina are restored back to 100 units.

iv) The number of ipods an order can only be in multiples of 10.

vi) If an order is placed with 120 ipods from Brazil, the remaining ipods can be brought from the inventory in Argentina. However, shipping price of $400 per 10 units is applied.

Write a program that calculates the minimum cost for purchasing the given no of units.

Input format: `<country> : <number_of_ipods>`

Output format: `<cost> : <remaining_ipods_in_brazil> : <remaining_ipods_in_argentina>`

If the order cannot be fulfilled, your program should return "Out of stock."

<!-- Input - [Country] : [iPod required]

Output - [] : [Remaining iPod in Brazil] : [Remaining iPod in Argentina] -->

#### Input 1

```
Brazil : 5
```

#### Expected Output 1

```
500 : 95 : 100
```

#### Input 2

```js
Brazil : 50
```

#### Expected Output 2

```
4500 : 100 : 50
```

#### Input 3

```
Argentina : 120
```

#### Expected Output 3

```
7800 : 80 : 0
```

#### Input 4

```
Argentina : 250
```

#### Expected Output 4

```
Out of stock!!!!
```


```js
// A new online store sells iPods & iPhones. They are faced with an interesting problem of managing their inventory distributed across 2 countries: Brazil and Argentina.

// <!-- Inventory Management Recently a new online store opened on the Internet that sells iPods & iPhones. They are faced with an interesting problem of managing their inventory distributed across 2 countries: Brazil and Argentina. -->

// You have been assigned to write a program to minimize the sale price for online customers based on its inventory in these 2 countries. The prices are different based on the country where the inventory is stored.

// The inventory in the two countries is limited.

// For iPods:
// - 100 in Brazil selling at $65
// - 100 in Argentina selling at $100

// <!-- There are 100 iPods in Brazil which has a sale price of $65 whereas there are 100 in Argentina which has a sale price of $100. -->

// For iPhones:
// - 100 in Brazil selling at $100
// - 50 in Argentina selling at $150

// <!-- There are 100 iPhone in Brazil which have a sale price of $100 whereas there are 50 in Argentina which have a sale price of $150. -->

// <!-- For simplicity we will use US dollars as our transaction currency. -->

// The order should be fulfilled fully or not at all.

// If the inventory from one country in used up, items have to be fetched from the other country. However, there is a transport cost involved when the item needs to be shipped from one country to another in case the purchase country is different than the inventory country. Shipping cost is $400 for every 10 units of item type (no mixing of item types). Note that transport cost is always in multiples of 10 units.

// If a customer passport belongs to local country then the customer will get 20% discount on the transport cost. For example a customer placing order from Argentina and has a Brazil passport, while shipping order from Brazil the transport cost will be charged ($400 - 20% = $320) for every 10 units.

// Passport numbers from Brazil:
// - Starts with 'B'
// - Followed by 3 digits
// - Followed by 2 characters
// - Followed by 7 alphanumeric characters

// <!-- To identify passport from brazil, passport number starts with B, followed by 3 digits, followed 2 chars, followed by 7 alphanumeric characters. -->

// Passport numbers from Argentina:
// - Starts with 'A'
// - Followed by 2 characters
// - Followed by 9 alphanumeric characters

// <!-- And for Argentina, passport number starts with A, followed by 2 chars, followed by 9 alphanumeric characters. -->

// To minimize the total sales price it can be partly fulfilled from one country and remaining from other. Assume that before each purchase order the inventory is replenished to its normal level. Therefore, each order is independent of each other.

// Input format:
// ```
// <purchase_country>:<optional_passport_number>:<item_type>:<number_of_ units_to_be_ordered>:<item_type>:<number_of_units_to_be_ordered>
// ```

// Output format:
// ```
// <total_sale_price>:<ipod_brazil_inventory>:<ipod_argentina_inventory> :<iphone_brazil_inventory>:<iphone_argentina_inventory>
// ```

// #### Input 1

// ```
// Brazil:B123AB1234567:iPhone:20:iPod:10
// ```
// <!-- INPUT 1: Brazil:B123AB1234567:iPhone:20:iPod:10 -->

// #### Expected Output 1

// ```
// 2650:90:100:80:50
// ```
// <!-- OUTPUT 1: 2650:90:100:80:50 -->

// #### Input 2

// ```
// Argentina:B123AB1234567:iPhone:22:iPod:10
// ```
// <!-- INPUT 2: Argentina:B123AB1234567:iPhone:22:iPod:10 -->

// #### Expected Output 2

// ```
// 3910:90:100:80:48
// ```
// <!-- OUTPUT 2: 3910:90:100:80:48 -->

// #### Input 3

// ```
// Brazil:AAB123456789:iPhone:125:iPod:70
// ```
// <!-- INPUT 3: Brazil:AAB123456789:iPhone:125:iPod:70 -->

// #### Expected Output 3

// ```
// 19260:30:100:0:25
// ```
// <!-- OUTPUT 3: 19260:30:100:0:25 -->

// #### Input 4

// ```
// Argentina:AAB123456789:iPod:50:iPhone:25
// ```
// <!-- INPUT 4: Argentina:AAB123456789:iPod:50:iPhone:25 -->

// #### Expected Output 4

// ```
// 8550:100:50:80:45
// ```
// <!-- OUTPUT 4: 8550:100:50:80:45 -->

// #### Input 5

// ```
// Brazil:iPhone:50:iPod:150
// ```
// <!-- INPUT 5: Brazil:iPhone:50:iPod:150 -->

// #### Expected Output 5

// ```
// 18500:0:50:50:50
// ```
// <!-- OUTPUT 5: 18500:0:50:50:50 -->

// <!-- #### Input 6

// ```
// Brazil:iPhone:250:iPod:150
// ``` -->
// <!-- INPUT 6: Brazil:iPhone:250:iPod:150 -->

// <!-- #### Expected Output 6

// ```
// OUT_OF_STOCK💯100💯50
// ``` -->
// <!-- OUTPUT 6: OUT_OF_STOCK💯100💯50 -->
```