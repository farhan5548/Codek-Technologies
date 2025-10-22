// const array_name = [item1, item2, ...];
// Method 1
// const fruits = ["Apple", "Mango", "Banana", "Grapes"];
// console.log(fruits);

// Method 2
const cars = [];
cars[0] = "BMW";
cars[1] = "Buggati";
cars[2] = "Nissan GTR";
cars[3] = "DODGE";
// console.log(cars);

// Method 3
const veicles = new Array("Saab", "Volvo", "BMW");
// OverWrite the Array
veicles[0] = "Honda";
// Array to String
// console.log(veicles.toString());

// Arrays use numbers to access its "elements". In this example, person[0] returns John:
const person = ["Farhan", "Fareed", 21];
// console.log(person.length);
// console.log(person);
// console.log(person[0]);

// Objects use names to access its "members". In this example, person.firstName returns John:
const myself = {
  firstName: "FARHAN",
  lastName: "FAREED",
  age: 21,
};
// console.log(myself);
// console.log(myself.firstName);

// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array

// cars.length   // Returns the number of elements
// cars.sort()   // Sorts the array

// Access last element of array
// const fruit = ["Apple", "Mango", "Banana", "Grapes"];
// let eat = fruit[fruit.length-1];
// console.log(eat);

const dream = ["Apple", "Mango", "Banana", "Grapes"];
// console.log(dream);
dream.push("PineApple");
// console.log("After Push data in Array :",dream);

// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.
// In JavaScript, objects use named indexes.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.

// JavaScript has a built-in array constructor new Array().
// But you can safely use [] instead.

const point = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];
// console.log(point);
// console.log(points);

// Single element in array using new Array makes error
const bc = new Array(20);
console.log(bc);

const kha_lo = ["Banana", "Orange", "Apple"];
let nhi = typeof kha_lo;
// console.log(nhi);

// The instanceof operator returns true if an object is created by a given constructor:
let ok = kha_lo instanceof Array;
// console.log(ok);

const myObj = {
  name: "King",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Audi", models: ["500", "Panda"] },
  ],
};

// console.log(myObj);
// console.log(myObj.cars);

// Basic Array Methods
// Array length	Returns the length (size) of an array
// Array toString()	Converts an array to a comma separated string of values
// Array at()	Returns an indexed element from an array
// Array join()	Joins all array elements into a string
// Array pop()	Removes the last element from an array
// Array push()	Adds a new element to an array
// Array shift()	Removes the first array element
// Array unshift()	Adds a new element at the beginning of an array
// Array delete()	Creates undefined holes in the array
// Array concat()	Creates a new array by merging existing arrays
// Array copyWithin()	Copies array elements to another position in the array
// Array flat()	Creates a new array from sub-array elements
// Array slice()	Slices out a part of an array
// Array splice()	Adds new items to an array
// Array toSpliced()	Adds new items to an array in a new array

// const fruits = ["Apple", "Mango", "Banana", "Grapes"];

// fruits.length = 2;
// console.log(fruits);

// let myList = fruits.toString();
// console.log(myList, typeof myList);

// The at() method returns an indexed element from an array.
// The at() method returns the same as [].
// let fruit = fruits.at(2);
// console.log(fruit);

// let xyz = fruits.join(" - ");
// console.log(xyz);

// Push & Pop
// fruits.push("WaterMelon");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// delete fruits[2];
// console.log(fruits);
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// fruits.shift();
// console.log(fruits);

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
// fruits.unshift("Lemon");
// console.log(fruits);
// console.log(fruits[0]);
// const gari = new Array("Saab", "Volvo", "BMW");
// const sohni_gadi = ["Apple", "Mango", "Banana", "Grapes"];
// const shoq = new Array("Saab", "Volvo", "BMW");

// const arr1 = gari.concat(sohni_gadi, shoq);
// console.log(arr1);

// const fruits = ["Apple", "Mango", "Banana", "Grapes"];
// fruits.copyWithin(2,1);
// console.log(fruits);

// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

const citrus = fruits.slice(1);
console.log(citrus);

// Array Search Methods
// Array indexOf()	Returns the first position of an element value
// Array lastIndexOf()	Returns the last position of an element value
// Array includes()	Returns true if an element value is present in an array
// Array find()	Returns the value of the first element that passes a test
// Array findIndex()	Returns the index of the first element that passes a test
// Array findLast()	Returns the value of the last element that passes a test
// Array findLastIndex()	Returns the index of the last element that passes a test

// Array Iteration Methods

// Array forEach	Calls a function for each array element
// Array map()	Creates a new array by performing a function on each element
// Array flatMap()	Creates a new array by mapping and flattening all elements
// Array filter()	Creates a new array with all elements that pass a test
// Array reduce()	Runs a function on each element to produce a single value
// Array reduceRight()	Runs a function on each element to produce a single value
// Array every()	Returns true if every elements pass a test
// Array some()	Returns true if some elements pass a test
// Array from()	Returns an array object from an iterable object
// Array keys()	Returns an array with the keys of an array
// Array entries()	Returns an array with the entries of an array
// Array with()	Update elements without altering the original array
// Array Spread (...)	Expands an array into individual elements
// Array Rest (...)	Destruct an array and collect the leftovers

// The filter() method creates a new array with array elements that pass a test.
// const num = [23, 44, 6, 15, 17, 25];
// const over = num.filter(myFunction);
// function myFunction (value, index, array){
//     return value > 18;
// };
// over.sort();
// over.reverse();
// console.log(over);

const xyz = ["hacker", "unknown", " data", "server"];
let abc = " ";
xyz.forEach(theHacker);
function theHacker(value, index, array){
  abc = abc + value + " ";
}
console.log(abc);

// const xyz = ["hacker", "unknown", " data", "server"];
// let abc = " ";
// xyz.map(theHacker);
// function theHacker(value, index, array){
//   abc +="I'm " +  value + "." + "\n";
// }
// console.log(abc.trimStart(0));

const arr = [3, 4, 21, 4, 4, 5, 9, 6, 89, 0];
let m = " ";
m = arr.map(myMultiply);
function myMultiply(value, index, array) {
  return value * 2;
}
console.log("Array values after multiply by 2: " + m);



// Tasks

// The reduce() method runs a function on each array element to produce a single value.
const num = [23, 34, 6, 15, 17, 25];
const sum = num.reduce(myFunction);
function myFunction (total, value, index, array){
    return total + value;
};
console.log("Sum of values in array is: " + sum);

const num1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const even_num = num1.filter(evenNumber);
function evenNumber(value, index, array) {
  return value%2 == 0;
}
console.log("Even Numbers from array are: " + even_num);