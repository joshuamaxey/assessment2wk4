/***********************************************************************
Write a function called `shoppingList(list)`. The shoppingList function will
take in a starting list as an array and return a new function that will allow
us to add to the list. When that return function is invoked with an
argument, it will add the argument to the list and return the list.


Look below to see how this function is invoked:

const groceryList = ['eggs']
const addToGroceryList = shoppingList(groceryList); // returns a function
addToGroceryList('maple syrup'); // returns ['eggs', 'maple syrup']

const clothesList = []
const addToClothesList = shoppingList(clothesList);
addToClothesList('tshirt'); // returns ['tshirt']
addToClothesList('pants'); // returns ['tshirt', 'pants']
console.log(clothesList); // ['tshirt', 'pants']

***********************************************************************/

// function shoppingList(list) { // This function takes in a list (rray) such as groceryList or clothesList
//   return function(item) { // It returns an anonymous function which takes an ITEM from the list as an argument;
//     list.push(item); // The array.push() method PUSHES the item given as an argument to the list provided as an argument
//     return list; // Finally, we return the list with the new element added
//   };
// }

// const groceryList = ['eggs'] //* Here we create a "list" (array) called groceryList
// const addToGroceryList = shoppingList(groceryList); // returns a function //* Here, we initialize a new variable addToGroceryList to hold the FUNCTION shoppingList with the "groceryList" array passed in as an argument
// addToGroceryList('maple syrup'); // returns ['eggs', 'maple syrup'] //* Then we call the addToGroceryList function to add the 'maple syrup' element to the 'groceryList' array.
// console.log(groceryList) //* When we log the 'groceryList' array to the console, it now includes the element we added using the addToGroceryList function.

//!------------------------------------------------------------------------------------------------------------------------------



addToGroceryList("brisket");
console.log(groceryList)

const clothesList = []
const addToClothesList = shoppingList(clothesList);

addToClothesList('tshirt'); // returns ['tshirt']
addToClothesList('pants'); // returns ['tshirt', 'pants']
addToClothesList('shoes');

console.log(clothesList); // ['tshirt', 'pants']

//& Callback functions

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = shoppingList;
