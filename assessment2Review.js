//& objects
//& For...in loops
//& Object.keys method
//& Object.values method
//& dot and bracket notation (objects)

//& callback functions

//& .split method
//& .join method

//!----------------------------------------------------------------------------------------------------------------------------''

//! POJO (Plain Old JavaScript Objects)

//^ Learning OBJECTIVES

//^ 1. Declare an object, and set keys and values

// // Objects are declared using curly braces:

// let object = {}; //Values within an object are indexed with KEYS, not by indices. The order of key-value pairs within an object is NOT guaranteed.

// let car = {}; // A car can have a color, number of seats, weight, etc. These are different properties that ight not be listed in any particular order but do define the characteristics of that car. //! We can create new key-value pairs by using bracket notation [] in conjunction with the assignment operator =.

// car["color"] = "white";

// car["seats"] = 4;

// console.log(car["color"]) // white
// console.log(car["seats"]) // 4

// //When you try to access a key that we have not assigned within an object?

// console.log(car["weight"]); // undefined, no big surprise there.

// let carColor = "color"; //So what happens if we assign the key of an object to a new variable?

// console.log(car[carColor]); // When we do that, we are able to access the value either by directly accessing the key or by accessing the new variable assigned to that key.

// car["weight"] = 2405;

// let carWeight = "weight"

// console.log(car[carWeight]); //2405

// console.log(carWeight); //weight

//! We can also create and assign key-value pairs to objects in a single statement:

// let dog = {
//     name: "Macy",
//     age: 10,
//     location: "Devine"
// };

// Don't forget to separate key-value pairs by commas.

//^ 2. Identify when to use . vs [] when accessing values of an object.

// // There are two ways to assign and access the key-value pairs of an object.

// car.year = 2010

// console.log(car.year) // 2012

// console.log(car["year"]) // 2010

// console.log(car.weight) // 2405

//! Thse are the rules for using . vs [] notation

// 1. Cannot use variables as keys OR use keys that begin with a NUMBER when using "." notation
// 2. "." notation is simpler and more readable thant [], so use when you're able.

//^ 3. Use the | obj[key] !== undefined | pattern to check if a given variable that contians a key exists in an object.

// // We know that if we try to access a key that does not exist within an object, we get "undefined"

// console.log(car.owner) // undefined

// // We can use this fact to check whether or not a key exists within an object. Like this:

// console.log(car.owner === undefined); // true, since this "owner" key does NOT exist within the object
// console.log(car.weight === undefined); // false, because this key DOES exist within the car object

// // With this ^^^ in mind, note that using undefined is not the preferred method of checking whether a key exists within an object. The PREFERRED method is to use the "in" operator, like this:

// console.log("owner" in car); // false because this key does NOT exist within the car object
// console.log("color" in car); //true because this key DOES exist within the car object
// console.log("weight" in car); // true because this key DOES exist within the car object

// //^ 4. Iterate through an object using for (keys in object) syntax

// // The for...in loop allows you to iterate through each KEY of an object in arbitrary order. This is useful for looping through BOTH the keys AND the values of an object. The general Syntax looks like this:

// for (let key in car) {
//     console.log(key); // prints color // seats // weight // year, all on separate lines as the loop iterates key by key.
// }

//! But what if we want to access the VALUES of an object? The for...in loop above only allows us to iterate through the enumerable KEYS of an object. To access the values of an object, we use bracket notation like this:

// for (let key in car) {
//     let value = car[key];
//     console.log(value); // prints 4 // 2405 // 2010 (seats/weight/year) on separate lines as it iterates key by key.
// }

// for (let key in car) {
//     let value = car[key];
//     console.log(key, value); // This prints, seats 4, weight 2405, year 2010 // as it iterates.
// }

// for (let key in car) {
//     let value = car[key];
//     console.log([key, value]); // Just by putting square brackets around the (key, value) statement in the console.log expression, we can print each key/value pair as an array. ['color', 'white'] ['seats', 4], etc.
// }

// for (let key in car) {
//     let characteristic = car[key];
//     console.log(key, characteristic); // Here, we see that we can assign the value at the current key to any variable name that we want.
// }

//^ 5. Utilize Object.keys() and Object.values() in a function

//& Note that a METHOD is a function that BELONGS to an object. Array methods, string methods, object methods, etc are all built-in (or original, if we create our own methods) functions that belong to their corresponding object or data type.
// This means taht EVERY METHOD IS A FUNCTION, but NOT EVERY FUNCTION IS A METHOD.
//! A METHOD is just a key-value pair where the KEY IS THE FUNCTION NAME AND THE VALUE IS THE FUNCTION DEFINITION.
// Let that sink in

// let dog = {
//     name: "Macy",
//     age: 10,
//     color: "brown"
// }

// dog["bark"] = function() {
//     return "bark bark!";
// }

// //* Here ^^^ you can see that we take the dog object and ASSIGN IT a new key/value pair wherein the KEY is the name of the function and the value is the function definition! So...

// console.log(dog.bark()) //returns "bark bark!"

// console.log(Object.keys(dog)) // returns an ARRAY of the keys in the dog object
// console.log(Object.values(dog)) // returns an ARRAY of the values in the dog object

// //& FINALLY, what do we do if we want to iterate through both the KEYS and VALUES of an object at the same time? THe Object.entries method accepts an object as the argument and returns an array of the [key, value] pairs within that Object. Like this:

// console.log(Object.entries(dog)); // returns arrays of the key, value pairs in the dog object
// console.log(Object.entries(car)); // returns arrays of the key, value pairs in the dog object.

//^ 6. Access keys and values in nested structures including arrays and objects

//^ 7. Write a function that uses an object data type to keep track of the frequency of occurrences as a counter

//~ OBJECT NOTATION Quiz

let dog = {};

dog.name = "Lily";

console.log(dog["name"]) //Lily

let manager = {};

manager["salary"] = "$$$";

console.log(manager.salary); // $$$

// let cat = {};
// let myKey = "color";

// cat.myKey = "orange";
// console.log(cat.myKey); // "orange"

let cat = { name: "Bruno" };

let catName = "name";

console.log(cat[catName])
console.log(cat["name"])
console.log(cat.name);

let bear = { growl: "RAWR" };

console.log(bear["age"]); // undefined

let car = {};

let colorVar = "color";

car[colorVar] = "blue"
car.color = "blue"
// car.colorVar = "blue" //! Will not work, can't use dot notation when the key is a variable
// car[0] = "blue" //! Will not work, objects don't have indices.

let lion = {name: "Simba"};

console.log(lion["color"] === undefined) // true, because "color" is not a key within the lion object.
