function findElement(arr, func) {
	return arr.reduce((acc, curr) => {
		if (func(curr) && !acc) {
			acc = curr
		}
		return acc
	}, undefined)
}
console.log(
	findElement([1, 3, 5, 8, 9, 10], function (num) {
		return num % 2 === 0
	})
)
