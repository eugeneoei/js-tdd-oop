class Item {

	constructor(name, sellIn, quality) {
		this.name = name
		this.sellIn = sellIn
		this.quality = quality
	}

	reduceSellIn() {
		this.sellIn -= 1
	}

}

module.exports = {
	Item
}