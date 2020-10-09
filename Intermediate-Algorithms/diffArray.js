function diffArray(arr1, arr2) {
	var tArr1
	let tArr2
	tArr1 = arr1.filter((x) => {
		return !arr2.includes(x)
	})
	tArr2 = arr2.filter((x) => {
		return !arr1.includes(x)
	})
	return tArr1.concat(tArr2)
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
