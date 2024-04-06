/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.

See below for examples

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
***********************************************************************/

// Take an object, a key, and a value
// Write a loop to iterate through the object. //! Which kind of loop do i use to iterate through an object?
// Check to see whether the value located at the current key of the object is NOT equal to the value given as an argument each iteration.
// If not, add this key-value pair to the object.
// return the mutated object.

// function keyAdderUniqueVal(object, key, value) {
// 	const values = new Set(Object.values(object)); // Here, the Object.values(object) method takes ALL of the enumerable values from the object provided as an argument and puts them into an array. //^ Then the new Set() method creates a new 'set' object using the values from that array. A Set is a built-in object that stores unique values, automatically removing any duplicates. So when you pass an array of object values to the Set construtor, it creates a new Set that contains only uniqeu values from the object.
// 	if (!values.has(value)) { //This conditional checks to see IF the 'values' array does NOT (notice the "!" operator) contain the value that was provided as an argument.
// 		object[key] = value; //IF it does not, then that value is assigned to the object with the key that was also provided as an argument.
// 	}
// 	return object //Finally, we return the mutated array.
// }

//!---------------------------------------------------------

function keyAdderUniqueVal(object, key, value) {

	let values = Object.values(object); //Returns the values of the object as an array

	if (!values.includes(value)) { //check to see IF the current value is already located in the array
		object[key] = value; //if not, add it to the object corresponding to the current key
	}

	return object;
}

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }

//& object.values method
//& Set object
//& .has method

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;
