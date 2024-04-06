/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will take
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	const charCount = {}; //initialize an empty object to hold the character count. Using an object is useful because it allows us to store the data in key-value pairs wherein the character itself can be the key while the number of times it appears can be the value.

	for (const char of string) { //This for...of loop iterates through each character (char) in the string.
		charCount[char] = (charCount[char] || 0) + 1; //^charCount[char] accesses the charCount object at the key that corresponds to the current character of the string. If the character has been seen before, it will access the existing count. if not, it will be undefined.
		//! So the charCount[char] = (charCount[char] || 0) expression states that IF there is a coutn for the current character, then that is the current count. If there is NOT (if it is undefined), then the count is set to 0 instead. This is the function of the logical OR statement.
		//And if it is undefined (hasn't been seen before) then the default count for that character is set to 0. This ensures that every character defaults to a count of 0 the first time that it is encountered.
		//^ Then the "+1" increments the ocunt by 1 for the character.

	}

	return charCount
}

function duplicateCharMinCount(string, minCount) {
	const charCount = countCharacters(string);
	return Object.keys(charCount).filter(char => charCount[char] >= minCount);
}

//&Object.keys method
//& for...of loop


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
