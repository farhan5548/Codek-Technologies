var username = "Farhan";
var age = 21;
var isOnline = true;
var emptyValue = null;
var notAssigned = undefined;
var randomValue = 165;
randomValue = "hello";
// console.log(randomValue);
function logMessage(message) {
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
var city = "Paris";
// Explicit Annotation (you declare it yourself)
var country = "France";
// console.log(city);
// console.log(country);
var names = ["Farhan", "Ahmad", "Ashraf"];
names.push("Usama");
// console.log(names);
// Readonly: The readonly keyword can prevent arrays from being changed.
var arr_name = ["apple", "grapes", "mango"];
// arr_name.push("banana"); This cause error 
// console.log(arr_name);
// A tuple is like a special array with:
// Fixed number of elements
// Fixed types in each position
// let ourTuple: [number, boolean, string];
// initialized incorrectly which throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];
var touple_name;
touple_name = [5, false, 'Coding was here'];
// console.log(touple_name);
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
ourTuple.push(2);
// console.log(ourTuple);
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
// ourReadonlyTuple.push('Coding God took a day off');
var graph = [55.2, 41.3];
var x = graph[0], y = graph[1];
// console.log(x,y);
var input = "Hello";
// Can't directly use it without a check
// input.toUpperCase(); // Error
if (typeof input === "string") {
    //   console.log(input.toUpperCase());
}
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
// console.log(pow(2));
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
// console.log(divide({dividend: 10, divisor: 2}));
function nawab(_a) {
    var ustad = _a.ustad, nokar = _a.nokar;
    return ustad + nokar;
}
// console.log(nawab({ustad:100,nokar:21}));
var myObj = {
    type: "Toyota",
    model: "Supra",
    year: 2003
};
// console.log(myObj);
var theObj = {
    car: "BMW"
};
theObj.car = "FORD Mustang";
// console.log(theObj);
var car = {
    type: "Honda",
};
car.mileage = 2000;
// console.log(car);
var nameAgeMap = {};
nameAgeMap[1] = 12; // no error
nameAgeMap[2] = 23;
// console.log(nameAgeMap);
// enum assign default values starting from 0 and add 1 when going to next value, We can also assign string values to it
var data;
(function (data) {
    data[data["A"] = 1] = "A";
    data[data["B"] = 2] = "B";
    data[data["C"] = 3] = "C";
    data[data["D"] = 4] = "D";
    data[data["E"] = 5] = "E";
})(data || (data = {}));
var displayData = data.E;
// console.log(displayData);
// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// console.log(StatusCodes.NotFound);
// console.log(StatusCodes.Success);
// String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["A"] = "Audi";
    CardinalDirections["B"] = "BMW";
    CardinalDirections["C"] = "Corolla";
    CardinalDirections["D"] = "Dodge";
})(CardinalDirections || (CardinalDirections = {}));
;
var userId = 123;
userId = "ABC123";
var person1 = {
    id: 1,
    name: "Farhan",
    age: 21
};
var person = {
    name: "Muzammal", age: 22
};
var item = { id: 1, name: "Laptop" };
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var CAR = {
    year: carYear,
    type: carType,
    model: carModel
};
// console.log(CAR);
function getYear() {
    return new Date().getFullYear();
}
;
// console.log(getYear());
function noReturn() {
    console.log("This function do not  return anything (using 'void')");
}
;
// noReturn();
// Parameters : Function parameters are typed with a similar syntax as variable declarations.
function noName(a, b) {
    return Math.pow(a, b);
}
;
// console.log(noName(5,3));
// Functions using Optional 
function isOptional(a, b, c) {
    return a + b + (c || 0);
}
;
// console.log(isOptional(15,35,50));
// Default parameters
function isDefault(x, y) {
    if (y === void 0) { y = 3; }
    return console.log("The cube of ".concat(x, " = ").concat(Math.pow(x, y)));
}
;
// isDefault(4);
// Named Parameters
function paraName(_a) {
    var name1 = _a.name1, name2 = _a.name2;
    return name1 + name2;
}
;
// console.log(paraName({name1:"Farhan" + " ", name2:"Fareed"}));
// Rest Parameters
function restPara(x, y) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return x + y + rest.reduce(function (a, b) { return a + b; });
}
;
var theFunction = function (value) {
    return value * -1;
};
// console.log(theFunction(99));
