const {
	backstagePassesItems,
	legendaryItems
} = require('./defs')

class Item {

	constructor(name, sellIn, quality) {
		this.name = name
		this.sellIn = sellIn
		this.quality = quality
	}

	reduceSellIn() {
		this.sellIn -= 1
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

			// pass since sulfuras should never decrease in quality

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

module.exports = {
	Item
}