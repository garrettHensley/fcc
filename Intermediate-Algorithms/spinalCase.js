// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
	return str
		.toLowerCase()
		.split(" ")
		.filter((x) => {
			return x != "-"
		})
		.reduce((sum, curr) => `${sum}-${curr}`)
}

console.log(spinalCase("This Is Spinal Tap"))
