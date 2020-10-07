/* 
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
	const newArr = []
	for (let i = 0; i < arr.length; i++) {
		let tempNum
		for (let j = 0; j < arr[i].length; j++) {
			// i want to avoid starting this array at 1, therefore adding j === 0 logic
			if (j === 0) {
				tempNum = arr[i][j]
			} else {
				if (tempNum < arr[i][j]) {
					tempNum = arr[i][j]
				}
			}
		}
		newArr.push(tempNum)
	}

	return newArr
}

console.log(
	largestOfFour([
		[4, 5, 1, 3],
		[13, 27, 18, 26],
		[32, 35, 37, 39],
		[1000, 1001, 857, 1],
	])
)
