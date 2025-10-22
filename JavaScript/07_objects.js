// name:value pairs are also called key:value pairs.
// object literals are also called object initializers

const details = {
  firstname: "Farhan",
  lastname: "Fareed",
  age: 21,
};
// console.log(details.firstname);

const person = {};
person.firstname = "Farhan";
person.lastname = "Fareed";
person.age = 21;
// console.log(person.firstname);

const person_1 = new Object();
person_1.firstName = "John";
person_1.lastName = "Doe";
person_1.age = 50;
// console.log(person_1.firstName +" "+ person_1.lastName + " is " + person_1.age + " years old man.");

// Objects are containers for Properties and Methods.
// Properties are named Values.
// Methods are Functions stored as Properties.
// Properties can be primitive values, functions, or even other objects.
// In JavaScript, almost "everything" is an object.

// Objects are objects
// Maths are objects
// Functions are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects
// All JavaScript values, except primitives, are objects.

// JavaScript Primitives
// A primitive value is a value that has no properties or methods.
// 3.14 is a primitive value
// A primitive data type is data that has a primitive value.

// JavaScript defines 7 types of primitive data types:
// string
// number
// boolean
// null
// undefined
// symbol
// bigint

// console.log(details.firstname);

const man_ = {
    firstname: "Farhan",
    lastname: "Fareed",
    age: 21,
    fullname: function(){
        return "My name is " + this.firstname + " " + this.lastname + ".";
    }
}

const xq = man_;
console.log(xq.firstname);
console.log(man_.fullname());

const man = {
  firstname: "Farhan",
  lastname: "Fareed",
  age: 21,
  fullname: function () {
    return "My name is " + this.firstname + " " + this.lastname + ".";
  },
};
// const f = man;
console.log(man);

// console.log(f.firstname);
// console.log(man.fullname());

const boy = {};
boy.firstname = "Farhan";
boy.lastname = "Fareed";
boy.age = 21;
let age = boy.age;
// console.log(age);

const male = {
  firstname: "Farhan",
  lastname: "Fareed",
  age: 21,
};
let x = "firstname";
let y = "age";
// console.log(male[x] + " is " + male[y] + " years old.");

// Adding New Properties
male.Salary = "80K";
// console.log(male.Salary);

// Deleting Properties
// console.log(male);
delete male.Salary;
// console.log(male);

// Nested Objects

myObj = {
  name: "Farhan",
  age: 21,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

// console.log(myObj.myCars.car2);
// console.log(myObj.myCars["car2"]);
// console.log(myObj["myCars"]["car2"]);
let p1 = "myCars";
// let p2 = "car2";
console.log(myObj[p1]);

// When we use function in objects then we add braces () to show output.
// const men = {
//   firstname: "Farhan",
//   lastname: "Fareed",
//   age: 21,
//   fullname: function () {
//     return "My name is " + this.firstname + " " + this.lastname + ".";
//   },
// };
// const d = man;
// console.log(d.firstname);
// console.log(men.fullname());

// const data = {
//   firstname: "Farhan",
//   lastname: "Fareed",
//   age: 21,
// };
// data.name = function () {
//   return (
//     "My name is " + this.firstname + " " + this.lastname + ".").toUpperCase();
// };
// console.log(data.name());

// Some solutions to display JavaScript objects are:
// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()

// method 1
// const theBoy = {
//   firstname: "Farhan",
//   lastname: "Fareed",
//   age: 21,
// };
// console.log(theBoy);

// method 2
// const theBoy = {
//   name: "Farhan",
//   age: 21,
//   city: "Gujrat"
// };

// let text = "";
// for (let x in theBoy) {
//   text += theBoy[x] + " ";
// };

// console.log(text ,typeof text);

// method 3
// Using Object.values()
// const theBoy = {
//   name: "Farhan",
//   age: 21,
//   city: "Gujrat"
// };
// const myArray = Object.values(theBoy);
// console.log(myArray ,typeof myArray);

// method 4
// Using JSON.stringify()
// The result will be a string written in JSON notation

// const theBoy = {
//   name: "Farhan",
//   age: 21,
//   city: "Gujrat"
// };
// let myString = JSON.stringify(theBoy)
// console.log(myString ,typeof myString);

// display data by values , keys , entries
const theBoy = {
  name: "Farhan",
  age: 21,
  city: "Gujrat"
};
const myValues = Object.values(theBoy);
const myKeys = Object.keys(theBoy);
const myEntries = Object.entries(theBoy);
console.log(myValues);
console.log(myKeys);
console.log(myEntries);

// Final TASK

const book = {
  category: "Computer Science",
  title: "Programming in JavaScript",
  chapters: 7,
  topics: 32,
  pages: 146,
  ranking: "Good",
  detail: function () {
    return("Book Details:" + "\n" + "Category: " + this.category + "\n" + "Title: " + this.title + "\n" + "Chapters: " +  this.chapters + "\n" + "Topics: " +  this.topics + "\n" + "Pages: "+ this.pages + "\n" + "Ranking: " + this.ranking);
  },
};
// console.log(book);
// console.log(book.category);

console.log(book.detail());

const myBook = Object.values(book);
// console.log(myBook);

const theBook = Object.keys(book);
// console.log(theBook);

const aBook = Object.entries(book);
// console.log(aBook);



// Object Constructor Functions
// Sometimes we need to create many objects of the same type.
// To create an object type we use an object constructor function.
// It is considered good practice to name constructor functions with an upper-case first letter.

function family(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "Pakistani"; // Property Default Values
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
};
const myFather = new family("John", "Doe", 50, "blue");
const myMother = new family("Sally", "Rally", 48, "green");
const mySister = new family("Anna", "Rally", 18, "green");
const mySelf = new family("Bruce Lee", "Rally", 22, "green");

myFather.nationality = "English"; // Adding a Property to an Object
console.log(myFather);
console.log("Your father is " + myFather.fullName());
