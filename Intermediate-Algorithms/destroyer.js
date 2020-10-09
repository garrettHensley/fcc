function destroyer(arr) {
	// loop through arguments after arguments[0]
	for (let i = 1; i < arguments.length; i++) {
		arr = arr.filter((x) => x != arguments[i])
	}
	return arr
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
