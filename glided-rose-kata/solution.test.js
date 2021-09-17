const { Item } = require('./solution')

describe('Item', () => {

	// instance creation test
	it('On instance creation, "name", "sellIn" and "quality" fields should equal values passed to constructor', () => {
		const item = new Item('Item One', 1, 1)
		expect(item.name).toEqual('Item One')
		expect(item.sellIn).toEqual(1)
		expect(item.quality).toEqual(1)
	})

	// reduce 'sellIn' value when 'reduceSellIn' function is called
	it('Should reduce "sellIn" value by 1 at the end of the day', () => {
		const item = new Item('Item One', 1, 1)
		item.reduceSellIn()
		expect(item.sellIn).toEqual(0)
	})

})