const { Item } = require('./solution')

describe('Item', () => {

	// instance creation test
	it('Should have properties "SellIn" and "Quality" on instance creation', () => {
		const item = new Item('Item One', 10, 10)
		expect(item.getSellIn()).toEqual(10)
		expect(item.getQuality()).toEqual(10)
	})

})