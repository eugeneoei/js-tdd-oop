const { Item } = require('./solution')
const {
	agedBrie,
	sulfuras
} = require('./defs')

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

	it('An item\'s quality should never be < 0', () => {
		const item = new Item('Item One', 10, 4)
		const expectedValues = [
			{ sellIn: 9, quality: 3 },
			{ sellIn: 8, quality: 2 },
			{ sellIn: 7, quality: 1 },
			{ sellIn: 6, quality: 0 },
			{ sellIn: 5, quality: 0 },
			{ sellIn: 4, quality: 0 }
		]
		expectedValues.forEach(expectedValue => {
			item.reduceSellIn()
			item.updateQuality()
			expect(item.sellIn).toEqual(expectedValue.sellIn)
			expect(item.quality).toEqual(expectedValue.quality)
			expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
			expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)
		})
	})

	it('Aged Brie\'s quality should increase by 1 at the end of the day', () => {
		const item = new Item(agedBrie, 20, 10)
		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toEqual(19)
		expect(item.quality).toEqual(11)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)
	})

	it('Aged Brie\'s quality should increase by 2 at the end of the day if "sellIn" is <= 10', () => {
		const item = new Item(agedBrie, 12, 10)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toEqual(11)
		expect(item.quality).toEqual(11)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toEqual(10)
		expect(item.quality).toEqual(13)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toEqual(9)
		expect(item.quality).toEqual(15)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)

	})

	it('Aged Brie\'s quality should increase by 3 at the end of the day if "sellIn" is <= 5', () => {
		const item = new Item(agedBrie, 12, 10)
		const expectedValues = [
			{ sellIn: 11, quality: 11 },
			{ sellIn: 10, quality: 13 },
			{ sellIn: 9, quality: 15 },
			{ sellIn: 8, quality: 17 },
			{ sellIn: 7, quality: 19 },
			{ sellIn: 6, quality: 21 },
			{ sellIn: 5, quality: 24 },
			{ sellIn: 4, quality: 27 }
		]
		expectedValues.forEach(expectedValue => {
			item.reduceSellIn()
			item.updateQuality()
			expect(item.sellIn).toEqual(expectedValue.sellIn)
			expect(item.quality).toEqual(expectedValue.quality)
			expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
			expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)
		})
	})

	it('Aged Brie\'s quality should become 0 at the end of the day if "sellIn" is <= 0', () => {
		const item = new Item(agedBrie, 12, 10)
		const expectedValues = [
			{ sellIn: 11, quality: 11 },
			{ sellIn: 10, quality: 13 },
			{ sellIn: 9, quality: 15 },
			{ sellIn: 8, quality: 17 },
			{ sellIn: 7, quality: 19 },
			{ sellIn: 6, quality: 21 },
			{ sellIn: 5, quality: 24 },
			{ sellIn: 4, quality: 27 },
			{ sellIn: 3, quality: 30 },
			{ sellIn: 2, quality: 33 },
			{ sellIn: 1, quality: 36 },
			{ sellIn: 0, quality: 0 },
			{ sellIn: -1, quality: 0 }
		]
		expectedValues.forEach(expectedValue => {
			item.reduceSellIn()
			item.updateQuality()
			expect(item.sellIn).toEqual(expectedValue.sellIn)
			expect(item.quality).toEqual(expectedValue.quality)
			expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
			expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)
		})
	})

	it('Aged Brie\'s quality should never be > 50', () => {
		const item = new Item(agedBrie, 12, 40)
		const expectedValues = [
			{ sellIn: 11, quality: 41 },
			{ sellIn: 10, quality: 43 },
			{ sellIn: 9, quality: 45 },
			{ sellIn: 8, quality: 47 },
			{ sellIn: 7, quality: 49 },
			{ sellIn: 6, quality: 50 },
			{ sellIn: 5, quality: 50 },
			{ sellIn: 4, quality: 50 },
			{ sellIn: 3, quality: 50 },
			{ sellIn: 2, quality: 50 },
			{ sellIn: 1, quality: 50 },
			{ sellIn: 0, quality: 0 },
			{ sellIn: -1, quality: 0 }
		]
		expectedValues.forEach(expectedValue => {
			item.reduceSellIn()
			item.updateQuality()
			expect(item.sellIn).toEqual(expectedValue.sellIn)
			expect(item.quality).toEqual(expectedValue.quality)
			expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
			expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)
		})
	})

	it('Sulfuras should never decrease in quality', () => {
		const item = new Item(sulfuras, 10, 10)
		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toEqual(9)
		expect(item.quality).toEqual(10)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toEqual(8)
		expect(item.quality).toEqual(10)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toEqual(7)
		expect(item.quality).toEqual(10)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)
	})

})
