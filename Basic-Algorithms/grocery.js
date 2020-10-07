const purchaseItems = [
	{
		name: "apples",
		dept: "groceries",
		price: 2.49,
	},
	{
		name: "bread",
		dept: "groceries",
		price: 2.99,
	},
	{
		name: "batteries",
		dept: "electronics",
		price: 5.8,
	},
	{
		name: "eggs",
		dept: "groceries",
		price: 3.99,
	},
	{
		name: "t-shirts",
		dept: "apparel",
		price: 9.99,
	},
]
let groceryTotal

// groceryTotal should be: 9.47
// Write your code below
groceryTotal = purchaseItems
	.filter((item) => item.dept == "groceries")
	.reduce((sum, curr) => sum + curr.price, 0)

console.log(groceryTotal)
