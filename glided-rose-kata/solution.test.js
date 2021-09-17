const { Item } = require('./solution')

describe('Item', () => {

	// instance creation test
	it('Should not be able to access "sellIn" and "quality" private fields', () => {
		const item = new Item('Item One', 1, 1)
		expect(item.sellIn).not.toBeDefined()
		expect(item.quality).not.toBeDefined()
	})

	// it('Should have properties "sellIn" and "quality" on instance creation', () => {
	// 	const item = new Item('Item One', 10, 10)
	// 	expect(item.getSellIn()).toEqual(10)
	// 	expect(item.getQuality()).toEqual(10)
	// })

})