let a = 3.14;    // A number with decimals
let b = 3;       // A number without decimals

let c = 123e5;    // 12300000
let d = 123e-5;   // 0.00123

// Integer Precision
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

let e = 999999999999999;   // x will be 999999999999999
let f = 9999999999999999;  // y will be 10000000000000000


// Floating Precision
// Floating point arithmetic is not always 100% accurate:
let g = 0.2 + 0.1;
let h = (0.2 * 10 + 0.1 * 10) / 10;
// console.log(h);

// If you add two numbers, the result will be a number:
let i = 10;
let j = 20;
let k = i + j;
// console.log(k);

// If you add two strings, the result will be a string concatenation:
let l = "10";
let m = "20";
let n = l + m;
// console.log(n);

// If you add a number and a string, the result will be a string concatenation:
let o = 10;
let p = "20";
let q = o + p;
// console.log(q);

// JavaScript will try to convert strings to numbers in all numeric operations:
// let x = "1000";
// let y = "10";
// let z = x / y;
// console.log(z, typeof z);

// NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

// let x = 100 / "Apple";
// console.log(x);

// NaN is a number: typeof NaN returns number.
// Infinity is a number: typeof Infinity returns number.
// let x = NaN;
// let y = 5;
// let z = x + y;
// console.log(typeof NaN, z);


// By default, JavaScript displays numbers as base 10 decimals.
// But you can use the toString() method to output numbers from base 2 to base 36.
// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.

// let myNumber = 32;
// console.log(myNumber.toString(32)); 
// console.log(myNumber.toString(16)); 
// console.log(myNumber.toString(12)); 
// console.log(myNumber.toString(10)); 
// console.log(myNumber.toString(8)); 
// console.log(myNumber.toString(2)); 


// JavaScript Numbers as Objects
// Normally JavaScript numbers are primitive values created from literals:
// But numbers can also be defined as objects with the keyword new:

// let x = 123;
// let y = new Number(123);
// console.log(x);
// console.log(y);


// How to Create a BigInt
// To create a BigInt, append n to the end of an integer or call BigInt():
// let x = 9999999999999999;
// let y = 9999999999999999n;

// let x = 1234567890123456789012345n;
// let y = BigInt(1234567890123456789012345);

// console.log(typeof x, x);
// console.log(y);


// let x = 9007199254740995n;
// let y = 9007199254740995n;
// console.log(z = x * y); 

// let x = Number.MAX_SAFE_INTEGER;
// let y = Number.MIN_SAFE_INTEGER;
// console.log(x);
// console.log(y);

// let x = Number.isInteger(10);
// let y = Number.isInteger(12345678901234567890);
// console.log(x);
// console.log(y);


// let x = Number.isSafeInteger(10);
// let y = Number.isSafeInteger(12345678901234567890);
// console.log(x);
// console.log(y);



// Method	Description
// toString()	Returns a number as a string
// toExponential()	Returns a number written in exponential notation
// toFixed()	Returns a number written with a number of decimals
// toPrecision()	Returns a number written with a specified length
// valueOf()	Returns a number as a number
// let x = 123;
// let y = x.toString();
// console.log(y, typeof y);

// let av = 9.656;
// let bv = av.toExponential(2);
// let cv = av.toExponential(4);
// console.log(bv);
// console.log(cv);
// let av = 9.656;
// let vv = av.toFixed(2);
// let vvv = av.toFixed(4);
// console.log(vv);
// console.log(vvv);

// let av = 9.656;
// let jk = av.toPrecision();
// let kl = av.toPrecision(2);
// let jl = av.toPrecision(4);
// console.log(jk);
// console.log(kl);
// console.log(jl);


// let x = 123;
// let y = x.valueOf();
// console.log(y);
// console.log((100 + 23).valueOf());
// --------------------------Math--------------------------
// console.log(Math.floor((Math.random()*100) + 1));

// const min = 1;
// const max = 100;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min); 

// console.log(Math.floor(Math.random() * 100 + 1));

// console.log(Math.floor(Math.random() * (100 - 1 + 1)) + 1 );

// Math.E        // returns Euler's number
// Math.PI       // returns PI
// Math.SQRT2    // returns the square root of 2
// Math.SQRT1_2  // returns the square root of 1/2
// Math.LN2      // returns the natural logarithm of 2
// Math.LN10     // returns the natural logarithm of 10
// Math.LOG2E    // returns base 2 logarithm of E
// Math.LOG10E   // returns base 10 logarithm of E

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	    Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)

// JavaScript Math Methods
// Method	Description
// abs(x)	Returns the absolute value of x
// acos(x)	Returns the arccosine of x, in radians
// acosh(x)	Returns the hyperbolic arccosine of x
// asin(x)	Returns the arcsine of x, in radians
// asinh(x)	Returns the hyperbolic arcsine of x
// atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
// atan2(y, x)	Returns the arctangent of the quotient of its arguments
// atanh(x)	Returns the hyperbolic arctangent of x
// cbrt(x)	Returns the cubic root of x
// ceil(x)	Returns x, rounded upwards to the nearest integer
// cos(x)	Returns the cosine of x (x is in radians)
// cosh(x)	Returns the hyperbolic cosine of x
// exp(x)	Returns the value of Ex
// floor(x)	Returns x, rounded downwards to the nearest integer
// log(x)	Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)	Returns the number with the highest value
// min(x, y, z, ..., n)	Returns the number with the lowest value
// pow(x, y)	Returns the value of x to the power of y
// random()	Returns a random number between 0 and 1
// round(x)	Rounds x to the nearest integer
// sign(x)	Returns if x is negative, null or positive (-1, 0, 1)
// sin(x)	Returns the sine of x (x is in radians)
// sinh(x)	Returns the hyperbolic sine of x
// sqrt(x)	Returns the square root of x
// tan(x)	Returns the tangent of an angle
// tanh(x)	Returns the hyperbolic tangent of a number
// trunc(x)	Returns the integer part of a number (x)


let less = 1;
let high = 100;
// random generates value between 0 to 1
// floor removes numbers after point and we add 1 in floor so we can't get zero
console.log(Math.floor(Math.random() * (100 - 1 + 1)) + 1); 