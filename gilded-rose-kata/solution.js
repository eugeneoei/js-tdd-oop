const {
	backstagePassesItems,
	legendaryItems,
	legendaryItemQualityValue
} = require('./defs')

class Item {

	constructor(name, sellIn, quality) {
		this.name = name
		this.sellIn = sellIn
		this.quality = quality
	}

	checkMaximumQuality() {
		if (this.quality > 50) {
			this.quality = 50
		}
	}

	checkMinimumQuality() {
		if (this.quality < 0) {
			this.quality = 0
		}
	}

	reduceSellIn() {
		this.sellIn -= 1
	}

	updateQuality() {

		if (backstagePassesItems.includes(this.name)) {

			if (this.sellIn <= 0) {
				this.quality = 0
			} else if (this.sellIn <= 5) {
				this.quality += 3
			} else if (this.sellIn <= 10) {
				this.quality += 2
			} else {
				this.quality += 1
			}
			this.checkMaximumQuality()

		} else if (legendaryItems.includes(this.name)) {

			// legendary items should never decrease in quality but value is always 80
			if (this.quality !== legendaryItemQualityValue) {
				this.quality = legendaryItemQualityValue
			}

		} else {

			if (this.sellIn >= 0) {
				this.quality -= 1
				this.checkMinimumQuality()
				this.checkMaximumQuality()
			} else {
				this.quality *= 0.5
			}

		}
		
	}

}

class Shop {

	constructor(name, items=[]) {
		this.name = name
		this.items = items
	}

	updateItemsQuality() {
		this.items.forEach(item => {
			item.reduceSellIn()
			item.updateQuality()
		})
	}

}

module.exports = {
	Item,
	Shop
}