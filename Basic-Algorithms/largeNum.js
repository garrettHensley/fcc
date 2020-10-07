function largestOfFour(arr) {
	return arr.map((e) =>
		e.reduce((acc, curr) => {
			if (curr > acc) return curr
			else return acc
		})
	)
}

console.log(
	largestOfFour([
		[4, 5, 1, 3],
		[13, 27, 18, 26],
		[32, 35, 37, 39],
		[1000, 1001, 857, 1],
	])
)
