//! 1.

const addFive3 = num => {
    const add = num + 5;
    add;
};

// This function SHOULD return undefined because it is a multi-expression function. Arrow functions with multiple expressions/lines of code are not able to use explicit returns.

console.log(addFive3(4)); //! Correct.
