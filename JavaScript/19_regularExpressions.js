// What Is a Regular Expression?
// A regular expression is a sequence of characters that forms a search pattern.
// When you search for data in a text, you can use this search pattern to describe what you are searching for.
// A regular expression can be a single character, or a more complicated pattern.
// Regular expressions can be used to perform all types of text search and text replace operations.
// Syntax
// /pattern/modifiers;
// Example
// /w3schools/i;
// Example explained:
// /w3schools/i  is a regular expression.
// w3schools  is a pattern (to be used in a search).
// i  is a modifier (modifies the search to be case-insensitive).

// Using String Methods
// In JavaScript, regular expressions are often used with the two string methods: search() and replace().
// The search() method uses an expression to search for a match, and returns the position of the match.
// The replace() method returns a modified string where the pattern is replaced.

let text = "Visit W3Schools";
let n = text.search(/w3schools/i);
console.log(n);


let text1 = "Visit Microsoft!";
let result = text1.replace(/microsoft/i, "W3Schools");
console.log(result);


// Using the RegExp Object
// In JavaScript, the RegExp object is a regular expression object with predefined properties and methods.
// Using test()
// The test() method is a RegExp expression method.
// It searches a string for a pattern, and returns true or false, depending on the result.

const pattern = /e/;
let t = pattern.test("The best things in life are free!");
console.log(t);


// Using exec()
// The exec() method is a RegExp expression method.
// It searches a string for a specified pattern, and returns the found text as an object.
// If no match is found, it returns an empty (null) object.

const obj = /e/.exec("The best things in life are free!");
console.log(obj);


// The RegExp.escape() method returns string where characters that belongs to the regular expression syntax are escaped.
// This makes it possible to treat characters like +, *, ?, ^, $, (, ), [, ], {, }, |, and \ literally, and not as part of a regular expression.





// TASK 
function validateEmail(email) {
  const pattern = /^[a-z0-9]+@gmail+\.com$/;
  return pattern.test(email);
}
console.log(validateEmail("farhan44165@gmail.com"));
console.log(validateEmail("farhangmail"));



function validatePKPhone(phone) {
  // const pattern = /^(\+923\d{9}|03\d{9})$/;
  const pattern = /^(\+92\s3\d{2}\s\d{7}|03\d{2}\s\d{7}|\+923\d{9}|03\d{9}|03\d{2}\-\d{7})$/;
  return pattern.test(phone);
}
console.log(validatePKPhone("+92 300 1234567"));
console.log(validatePKPhone("0300 1234567"));
console.log(validatePKPhone("+923001234567"));
console.log(validatePKPhone("03001234567"));
console.log(validatePKPhone("0300-1234567"));



function validatePassword(passowrd){
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    // const pattern = /^[A-Za-z\d\W_].{8,}$/;
    // const pattern = /^[\w\W_].{8,}$/;

    return pattern.test(passowrd);
}
console.log(validatePassword("Password@123"));
console.log(validatePassword("Weakpass"));