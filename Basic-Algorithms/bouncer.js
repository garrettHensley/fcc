// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
	return arr.filter((value) => {
		if (value) {
			return value
		}
	})
}

console.log(bouncer([null, NaN, 1, 2, undefined]))
