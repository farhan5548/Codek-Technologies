// JavaScript function
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

// Function to compute the product of p1 and p2
// function theProduct(p1, p2) {
//   return p1 * p2;
// }
// console.log(theProduct(4,5));

// Function Invocation
// The code inside the function will execute when "something" invokes (calls) the function
// When an event occurs (when a user clicks a button)
// When it is invoked (called) from JavaScript code
// Automatically (self invoked)

// Function Return
// When JavaScript reaches a return statement, the function will stop executing.
// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
// Functions often compute a return value. The return value is "returned" back to the "caller"

function myValue(a, b) {
  return a * b;
}
let c = myValue(4, 3);

// console.log(x);

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
let value = toCelsius(98.6);
// console.log(value);

function tofahrenheit(celsius) {
  return 32 + celsius * (9 / 5);
}
let temp = tofahrenheit(37);
// console.log(temp);

// Instead of using a variable to store the return value of a function:
// You can use the function directly, as a variable value:

let txt = "The temperature is " + value + " Celsius";
let text = "The temperature is " + toCelsius(98.6) + " Celsius";
// console.log(txt);
// console.log(text);

// 25/06/2025

// +++++++++++++++++++++++++++++++++++++++  Task  +++++++++++++++++++++++++++++++++++++++
// function showGreeting() {
//   let name = prompt("Enter Your Name: ");
//   return name;
// }
// document.write("Hello, " + showGreeting(name) + " How are You?");

// Function Definition
function welcomeMsg(name) {
  return "Hello, " + name + " welcome to JS Practice";
}

let nameVal = "Farhan";

// calling the function
// console.log(welcomeMsg(nameVal));

// Function Expression
// It is similar to a function declaration without the function name. Function expressions can be stored in a variable assignment.

const mul = function (x, y) {
  return x * y;
};
// console.log(mul(4, 5));
4
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log("Normal Function ", a2);

const a3 = a.map((s) => s.length);

console.log("Using Arrow Function ", a3);

// a is a local variable defined inside the function:
function myFunction() {
  let a = 4;
  return a * a;
}

// b is global variable defined outside the function:
let b = 4;
function myFunction() {
  return b * b;
}
function myCounter() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}
const add = myCounter();
console.log(add());
console.log(add());
console.log(add());

function myFunctions(){
  let oky = 5;
  return function(){
    oky --;
    return oky;

  };

}
const sub = myFunctions();
console.log(sub());
console.log(sub());
console.log(sub());