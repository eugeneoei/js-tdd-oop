const { Item } = require('./solution')

const minimumQualityValue = 0
const maximumQualityValue = 50

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
		item.updateQuality()
		expect(item.quality).toEqual(0)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)
	})

	it('Should reduce "quality" by half if "sellIn" is < 0', () => {
		const item = new Item('Item One', 2, 10)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toEqual(1)
		expect(item.quality).toEqual(9)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toEqual(0)
		expect(item.quality).toEqual(8)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toEqual(-1)
		expect(item.quality).toEqual(4)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)
	})

	it('Aged Brie\'s quality should increase by 1 at the end of the day', () => {
		const item = new Item('Aged Brie', 20, 10)
		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toEqual(19)
		expect(item.quality).toEqual(11)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)
	})

	it('Aged Brie\'s quality should increase by 2 at the end of the day if "sellIn" is <= 10', () => {
		const item = new Item('Aged Brie', 11, 10)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toEqual(10)
		expect(item.quality).toEqual(11)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toEqual(9)
		expect(item.quality).toEqual(13)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toEqual(8)
		expect(item.quality).toEqual(15)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)

	})

})
