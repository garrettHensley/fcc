/* 
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
	let tempString = ""
	let splitStr = str.split(" ")
	for (let i = 0; i < splitStr.length; i++) {
		if (i === 0) {
			tempString = splitStr[i]
		} else {
			if (tempString.length < splitStr[i].length) {
				tempString = splitStr[i]
			}
		}
	}
	return tempString.length
}
console.log(
	findLongestWordLength("The quick brown fox jumped over the lazy dog")
)
