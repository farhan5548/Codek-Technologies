
let username: string = "Farhan";
let age: number = 21;
let isOnline: boolean = true;
let emptyValue: null = null;
let notAssigned: undefined = undefined;
let randomValue: any = 165;
randomValue = "hello";
// console.log(randomValue);
function logMessage(message: string): void {
  console.log(message);
}

// console.log(username);
// console.log(age);
// console.log(isOnline);
// console.log(emptyValue);
// console.log(notAssigned);
// console.log(randomValue);
// console.log(logMessage("hi"));


// Type Inference (TS guesses the type)
let city = "Paris"; 


// Explicit Annotation (you declare it yourself)
let country: string = "France";


// console.log(city);
// console.log(country);


let names : string[] = ["Farhan", "Ahmad", "Ashraf"];
names.push("Usama");
// console.log(names);

// Readonly: The readonly keyword can prevent arrays from being changed.
let arr_name : readonly string[] = ["apple", "grapes", "mango"];
// arr_name.push("banana"); This cause error 
// console.log(arr_name);


// A tuple is like a special array with:
// Fixed number of elements
// Fixed types in each position

// let ourTuple: [number, boolean, string];
// initialized incorrectly which throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];

let touple_name: [number, boolean, string];
touple_name = [5, false, 'Coding was here'];
// console.log(touple_name);

// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
ourTuple.push(2);
// console.log(ourTuple);

const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// ourReadonlyTuple.push('Coding God took a day off');

const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
// console.log(x,y);

let input: unknown = "Hello";
// Can't directly use it without a check
// input.toUpperCase(); // Error
if (typeof input === "string") {
//   console.log(input.toUpperCase());
}

function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

// console.log(pow(2));

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
  return dividend / divisor;
}

// console.log(divide({dividend: 10, divisor: 2}));

function nawab({ustad,nokar}:{ustad:number, nokar:number}){
    return ustad + nokar;
}
// console.log(nawab({ustad:100,nokar:21}));


let myObj : {type : string, model : string, year : number} = {
    type : "Toyota",
    model : "Supra",
    year : 2003
}
// console.log(myObj);

let theObj = {
    car : "BMW"
}
theObj.car = "FORD Mustang";
// console.log(theObj);


const car: { type: string, mileage?: number } = {
    type: "Honda",
};
car.mileage = 2000;
// console.log(car);

const nameAgeMap: { [index: number]: number } = {};
nameAgeMap[1] = 12; // no error
nameAgeMap[2]= 23; 

// console.log(nameAgeMap);

// enum assign default values starting from 0 and add 1 when going to next value, We can also assign string values to it
enum data{
    A = 1,
    B,
    C,
    D,
    E
}
let displayData = data.E;
// console.log(displayData);

// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

// console.log(StatusCodes.NotFound);
// console.log(StatusCodes.Success);

// String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.

enum CardinalDirections {
  A = 'Audi',
  B = "BMW",
  C = "Corolla",
  D = "Dodge"
};

// console.log(CardinalDirections.A);
// console.log(CardinalDirections.B);

// TypeScript Type Aliases and Interfaces
type ID = string | number;
let userId: ID = 123;
userId = "ABC123";
// console.log(userId);

type user = {
    id: number,
    name: string,
    age:number
}
let person1 : user = {
    id:1,
    name:"Farhan",
    age:21
}
// console.log(person1);

interface User {
  name: string;
  age: number;
}

let person: User = { 
    name: "Muzammal", age: 22 
};
// console.log(person);

interface Product {
  readonly id: number;
  name: string;
  price?: number;
}

let item: Product = { id: 1, name: "Laptop" };
// console.log(item);

// Try creating a new Car using the alias provided
type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
};

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const CAR: Car = {
  year: carYear,
  type: carType,
  model: carModel
};

// console.log(CAR);


function getYear() : number {
  return new Date().getFullYear();
};
// console.log(getYear());

function noReturn() : void {
  console.log("This function do not  return anything (using 'void')");
};
// noReturn();

// Parameters : Function parameters are typed with a similar syntax as variable declarations.
function noName(a : number, b : number){
  return a**b;
};
// console.log(noName(5,3));

// Functions using Optional 
function isOptional(a:number, b:number, c?:number){
  return a + b + (c||0);
};
// console.log(isOptional(15,35,50));

// Default parameters
function isDefault(x:number, y:number = 3 ){
  return console.log(`The cube of ${x} = ${x**y}`);
};
// isDefault(4);

// Named Parameters
function paraName({name1,name2}: {name1:string, name2: string}){
  return name1 + name2;
};
// console.log(paraName({name1:"Farhan" + " ", name2:"Fareed"}));

// Rest Parameters
function restPara(x:number, y:number, ...rest: number[]){
  return x + y + rest.reduce((a,b)=>a+b);
};
// console.log(restPara(5,5,10,40,20,5,15));

//Basic Syntax for Arrow Function
// const functionName = () => { };
type forNegative = (value : number) => number;
const theFunction : forNegative = (value) => {
  return value * -1;
};
// console.log(theFunction(99));