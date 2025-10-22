// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let text = "";

// console.log(text += cars[0]);

// FOR LOOP
// for (let i=0; i<cars.length; i++){
//     text += cars[i] + " ";

// }
// console.log(text);

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

// The JavaScript for in statement loops through the properties of an Object:


// const person = { fname: "John", lname: "Doe", age: 25 };
// let text = "";
// for (let x in person) {
//   text += person[x];
// }
// console.log(text); 


const numbers = [45, 4, 9, 16, 25];
let txt = "";

for (let x of numbers) {
  txt += " " + x;
}

console.log(txt); 

