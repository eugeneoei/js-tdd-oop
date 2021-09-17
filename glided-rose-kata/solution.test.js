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

	it('Should reduce "quality" by 1 if "sellIn" is >= 0', () => {
		const item = new Item('Item One', 1, 1)
		item.reduceSellIn()
		item.reduceQuality()
		expect(item.quality).toEqual(0)
	})

	it('Should reduce "quality" by half if "sellIn" is < 0', () => {
		const itemTwo = new Item('Item Two', 2, 10)

		itemTwo.reduceSellIn()
		itemTwo.reduceQuality()
		expect(item.sellIn).toEqual(1)
		expect(itemTwo.quality).toEqual(9)

		itemTwo.reduceSellIn()
		itemTwo.reduceQuality()
		expect(item.sellIn).toEqual(0)
		expect(itemTwo.quality).toEqual(8)
		
		itemTwo.reduceSellIn()
		itemTwo.reduceQuality()
		expect(item.sellIn).toEqual(-1)
		expect(itemTwo.quality).toEqual(4)
	})

})