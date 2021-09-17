# Objectives

Add the new feature to our system so that we can begin selling a new category of items

# System Implementation

- `SellIn` value === denotes the number of days we have to sell the item (`int`)
- `Quality` value === denotes how valuable the item is (`int`)
- Lowers both `SellIn` and `Quality` values for every item

# Requirements

- `Quality` reduces by half when `SellIn` < 0
- 0 <= `Quality` <= 50

- expcetions: 
	- “Aged Brie” actually increases in Quality the older it gets
		1. Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
		2. Quality drops to 0 after the concert
	- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality

# User Stories

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- “Aged Brie” actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- “Backstage passes”, like aged brie, increases in Quality as its SellIn value approaches;
	- Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	- Quality drops to 0 after the concert