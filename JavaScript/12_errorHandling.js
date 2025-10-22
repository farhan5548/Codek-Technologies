// Topics:
// 1) try...catch blocks.
// 2) Throwing custom errors.

// Practice:
// Write a function that throws an error if an invalid value is passed.

// JavaScript Errors
// Throw, and Try...Catch...Finally
// The try statement defines a code block to run (to try).
// The catch statement defines a code block to handle any error.
// The finally statement defines a code block to run regardless of the result.
// The throw statement defines a custom error.

// try {
//   const result = 10 / 0; // This will cause a "Division by zero" error in some contexts, but in JS it's Infinity
//   console.log(result);

//   const data = JSON.parse("invalid json"); // This will throw a SyntaxError
// } catch (e) {
//   console.error("An error occurred:", e.message);
//   You can also check the error type:
//   if (e instanceof SyntaxError) {
//     console.error("It's a SyntaxError!");
//   }
// } finally {
//   console.log("This always executes, whether an error occurred or not.");
// }

// try {
//   throw new TypeError("oops");
// } catch ({ name, message }) {
//   console.log(name); // "TypeError"
//   console.log(message); // "oops"
// }

// try {
//   This line will cause an error because 'undeclaredVariable' is not defined
//   console.log(undeclaredVariable);
// } catch (error) {
//   console.error("An error occurred:", error.message);
// }

// The throw statement allows you to create a custom error.
// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Cannot divide by zero.");
//   }
//   return a / b;
// }

// try {
//   let result = divide(10, 0);
//   console.log(result);
// } catch (error) {
//   console.error("An error occurred:", error.message);
// }



// function isEven(n) {
//   if (typeof n !== "number") {
//     throw new Error("Invalid input: Please enter a number.");
//   }

//   if (n % 2 == 0) {
//     return n + " is Even Number.";
//   } else if (n % 2 != 0) {
//     return n + " is Odd Number.";
//   } else {
//     throw new Error("Unexpected error occurred.");
//   }
// }

// console.log(isEven(2));
// try {
//   let result = isEven("a4");
//   console.log(result);
// } catch (error) {
//   console.error("An error occurred:", error.message);
// }


// The finally Statement
// The finally statement lets you execute code, after try and catch, regardless of the result:
// Syntax
// try {
//   Block of code to try
// }
// catch(err) {
//   Block of code to handle errors
// }
// finally {
//   Block of code to be executed regardless of the try / catch result
// }


// Six different values can be returned by the error name property.
// EvalError : Runs a string as JS code.
// RangeError :	A RangeError is thrown if you use a number that is outside the range of legal values.
// ReferenceError :	A ReferenceError is thrown if you use (reference) a variable that has not been declared.
// SyntaxError : A SyntaxError is thrown if you try to evaluate code with a syntax error.
// TypeError : A TypeError is thrown if an operand or argument is incompatible with the type expected by an operator or function.
// URIError	: A URIError is thrown if you use illegal characters in a URI function.
