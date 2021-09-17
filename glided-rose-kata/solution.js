class Item {

	constructor(name, sellIn, quality) {
		this.name = name
		this.sellIn = sellIn
		this.quality = quality
	}

	reduceSellIn() {
		this.sellIn -= 1
	}

	reduceQuality() {
		if (this.sellIn >= 0) {
			this.quality -= 1
		} else {
			this.quality *= 0.5
		}
	}

}

module.exports = {
	Item
}