/***********************************************************************
Write a function `pickyMyMap` that accepts an array and a callback as
arguments. The function should call the callback for each element of the
array, passing in the element and return a new array of the results of
each call to the callback function. If the result of the callback function
returns something falsey, then do not add it in the result array.
You may not mutate the original array.

const nums = [1, 2, 3, 4];
pickyMyMap(nums, (num) => num - 2); // [-1, 1, 2]

const booleans = [true, false, true, false, true];
pickyMyMap(booleans, (boolean) => !boolean); // [true, true]

You may not use Array's `map()`, `filter()`, or `forEach()` methods.
***********************************************************************/

// function pickyMyMap(arr, cb) {
// 	let newArr = []; // initialize a new array to hold the results of each call to the callback function

// 	for (let i = 0; i < arr.length; i++) { // write a for loop to iterate through each element of the array
// 		let cbResult = cb(arr[i]); //call the cb function on the element located at the current index of the array, then assign the result to the variable "cbResult"

// 		if (cbResult) { // This if statement checks to see if the value returned by calling the cb function on the element located at the current index of the array is truthy or falsey. IF it is truthy...
// 			newArr.push(cbResult); // ...then the result of calling the callback function on the element located at teh current index of the array is pushed to the newArr
// 		}
// 	}
// 	return newArr;
// }

//!-----------------------------------------------------------------------------------------------------------------------------

function pickyMyMap(arr, cb) {
	let resultArr = []

	for (let i = 0; i < arr.length; i++) {

		let el = arr[i]
		let cbResult = cb(el);

		if (cbResult) { //Check to see if the value is truthey
			resultArr.push(cbResult);
		}
	}
	return resultArr;
};

const nums = [1, 2, 3, 4];
console.log(pickyMyMap(nums, (num) => num - 2)); // [-1, 1, 2]

const booleans = [true, false, true, false, true];
console.log(pickyMyMap(booleans, (boolean) => !boolean)); // [true, true]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = pickyMyMap;
} catch (e) {
	module.exports = null;
}
