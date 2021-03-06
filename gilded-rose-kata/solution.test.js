const { Item, Shop } = require('./solution')
const {
	agedBrie,
	agedBrieA,
	agedBrieB,
	agedBrieC,
	durian,
	sulfuras,
	sulfurasA,
	sulfurasB,
	sulfurasC,
	soulStone,
	minimumQualityValue,
	maximumQualityValue,
	legendaryItemQualityValue
} = require('./defs')

describe('Item', () => {

	it('On instance creation, "name", "sellIn" and "quality" fields should equal values passed to constructor', () => {
		const item = new Item('Item One', 1, 1)
		expect(item.name).toBe('Item One')
		expect(item.sellIn).toBe(1)
		expect(item.quality).toBe(1)
	})

	it('Should reduce "sellIn" value by 1 at the end of the day', () => {
		const item = new Item('Item One', 1, 1)
		item.reduceSellIn()
		expect(item.sellIn).toBe(0)
	})

	it('Should reduce "quality" by 1 if "sellIn" is >= 0', () => {
		const item = new Item('Item One', 1, 1)
		item.reduceSellIn()
		item.updateQuality()
		expect(item.quality).toBe(0)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)
	})

	it('Should reduce "quality" by half if "sellIn" is < 0', () => {
		const item = new Item('Item One', 2, 10)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toBe(1)
		expect(item.quality).toBe(9)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toBe(0)
		expect(item.quality).toBe(8)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toBe(-1)
		expect(item.quality).toBe(4)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)
	})

	it('An item\'s quality should never be < 0', () => {
		// arrange
		const item = new Item('Item One', 10, 4)
		const expectedValues = [
			{ sellIn: 9, quality: 3 },
			{ sellIn: 8, quality: 2 },
			{ sellIn: 7, quality: 1 },
			//
			{ sellIn: 6, quality: 0 },
			{ sellIn: 5, quality: 0 },
			{ sellIn: 4, quality: 0 }
		]


		expectedValues.forEach(expectedValue => {
			item.reduceSellIn() // act
			item.updateQuality() // act
			expect(item.sellIn).toBe(expectedValue.sellIn) // assert
			expect(item.quality).toBe(expectedValue.quality) // assert
			expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue) // assert
			expect(item.quality).toBeLessThanOrEqual(maximumQualityValue) // assert
		})
	})

	it('An item\'s quality should never be > 50', () => {
		const item = new Item('Item One', 10, 55)
		const expectedValues = [
			{ sellIn: 9, quality: 50 },
			{ sellIn: 8, quality: 49 },
			{ sellIn: 7, quality: 48 },
			{ sellIn: 6, quality: 47 },
			{ sellIn: 5, quality: 46 },
			{ sellIn: 4, quality: 45 }
		]
		expectedValues.forEach(expectedValue => {
			item.reduceSellIn()
			item.updateQuality()
			expect(item.sellIn).toBe(expectedValue.sellIn)
			expect(item.quality).toBe(expectedValue.quality)
			expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
			expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)
		})
	})

	it('Aged Brie\'s quality should increase by 1 at the end of the day', () => {
		const item = new Item(agedBrie, 20, 10)
		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toBe(19)
		expect(item.quality).toBe(11)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)
	})

	it('Aged Brie\'s quality should increase by 2 at the end of the day if "sellIn" is <= 10', () => {
		const item = new Item(agedBrie, 12, 10)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toBe(11)
		expect(item.quality).toBe(11)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toBe(10)
		expect(item.quality).toBe(13)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
		expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toBe(9)
		expect(item.quality).toBe(15)
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
			expect(item.sellIn).toBe(expectedValue.sellIn)
			expect(item.quality).toBe(expectedValue.quality)
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
			expect(item.sellIn).toBe(expectedValue.sellIn)
			expect(item.quality).toBe(expectedValue.quality)
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
			expect(item.sellIn).toBe(expectedValue.sellIn)
			expect(item.quality).toBe(expectedValue.quality)
			expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
			expect(item.quality).toBeLessThanOrEqual(maximumQualityValue)
		})
	})

	it('Sulfuras should never decrease in quality', () => {
		const item = new Item(sulfuras, 10, 10)
		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toBe(9)
		expect(item.quality).toBe(legendaryItemQualityValue)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toBe(8)
		expect(item.quality).toBe(legendaryItemQualityValue)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)

		item.reduceSellIn()
		item.updateQuality()
		expect(item.sellIn).toBe(7)
		expect(item.quality).toBe(legendaryItemQualityValue)
		expect(item.quality).toBeGreaterThanOrEqual(minimumQualityValue)
	})

})

describe('Shop', () => {

	it('On instance creation, "name" should equal value passed to constructor and number of items in Shop should equal number of items passed to constructor', () => {
		const items = [
			new Item('Item One', 1, 1),
			new Item('Item Two', 2, 2),
			new Item('Item Three', 3, 3)
		]
		const shop = new Shop('Shop One', items)
		expect(shop.name).toBe('Shop One')
		expect(Array.isArray(shop.items)).toBe(true)
		expect(shop.items.length).toBe(items.length)
	})

	it('When a Shop is instantiated with only "name" parameter, "items" field should be an empty array', () => {
		const shop = new Shop('Shop One')
		expect(shop.name).toBe('Shop One')
		expect(Array.isArray(shop.items)).toBe(true)
		expect(shop.items.length).toBe(0)
	})

	it('Shop should update all it\'s items at the end of the day', () => {
		const items = [
			new Item(agedBrie, 12, 40),
			new Item(agedBrieA, 5, 48),
			new Item(agedBrieB, 3, 40),
			new Item(agedBrieC, 1, 28),
			new Item(durian, 10, 70),
			new Item(sulfuras, 8, 77),
			new Item(sulfurasA, 20, 55),
			new Item(sulfurasB, 5, 88),
			new Item(sulfurasC, 45, 20),
			new Item(soulStone, 3, 6),
			new Item('Item One', 10, 55),
			new Item('Item Two', 8, 0),
			new Item('Item Three', 24, 18),
			new Item('Item Four', 0, 18)
		]
		const expectedValues = [
			{ sellIn: 11, quality: 41 },
			{ sellIn: 4, quality: 50 },
			{ sellIn: 2, quality: 43 },
			{ sellIn: 0, quality: 0 },
			{ sellIn: 9, quality: 50 },
			{ sellIn: 7, quality: 80 },
			{ sellIn: 19, quality: 80 },
			{ sellIn: 4, quality: 80 },
			{ sellIn: 44, quality: 80 },
			{ sellIn: 2, quality: 80 },
			{ sellIn: 9, quality: 50 },
			{ sellIn: 7, quality: 0 },
			{ sellIn: 23, quality: 17 },
			{ sellIn: -1, quality: 9 }
		]
		const shop = new Shop('Shop One', items)

		shop.updateItemsQuality() // act

		const shopItems = shop.items
		shop.items.forEach((item, index) => {
			expect(item.sellIn).toBe(expectedValues[index]['sellIn'])
			expect(item.quality).toBe(expectedValues[index]['quality'])
		})
	})

})



// - Cohesion. Coupling
