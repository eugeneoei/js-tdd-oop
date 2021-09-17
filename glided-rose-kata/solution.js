class Item {

	constructor(name, sellIn, quality) {
		this.name = name
		this.sellIn = sellIn
		this.quality = quality
	}

	reduceSellIn() {
		this.sellIn -= 1
	}

	updateQuality() {

		if (this.name === 'Aged Brie') {

			if (this.sellIn <= 10) {
				this.quality += 2
			} else {
				this.quality += 1
			}

		} else {

			if (this.sellIn >= 0) {
				this.quality -= 1
			} else {
				this.quality *= 0.5
			}
			
		}
	}

}

module.exports = {
	Item
}