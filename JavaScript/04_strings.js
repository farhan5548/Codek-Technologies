// Strings are for storing text
// Strings are written with quotes

let text = "My name is Farhan Fareed.";
let size = text.length;
console.log(text);
console.log(size);

let str = "We are the so-called \"Vikings\" from the north.";
console.log(str);

let rtr = 'We are the so-called "Vikings" from the north.';
console.log(rtr);

// Quotes Inside Quotes
let a1 = "It's alright";
let a2 = "He is called 'Johnny'";
let a3 = 'He is called "Johnny"';
console.log(a1);
console.log(a2);
console.log(a3);

let ok = "My name is\nMr Farhan.";
console.log(ok);

let mno = `This is template string 
that allows multiline strings`;
console.log(mno);

let txt = `He's often called "Idiot"`;
console.log(txt);

// Normally, JavaScript strings are primitive values, created from literals:
// But strings can also be defined as objects with the keyword new:

let x = "Farhan";
let y = new String("Farhan");

console.log(x);
console.log(typeof x);

console.log(y);
console.log(typeof y);

console.log(x==y);
console.log(x===y);

// Comparing two objects will give false answer
let a = new String("Codek");
let b = new String("Codek");
console.log(a==b);
console.log(a===b);

// let tex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(tex.length);

// Extracting String Characters
// There are 4 methods for extracting string characters:

// The at(position) Method
// The charAt(position) Method
// The charCodeAt(position) Method
// Using property access [] like in arrays

let tex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// ES2022 introduced the string method at():
console.log(tex.at(0));

// Property Access [ ]
console.log(tex[1]);

// The charAt() method returns the character at a specified index (position) in a string:
let tx = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(tx.charAt(2));
console.log(tx.charAt(25));

// The charCodeAt() method returns the code of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).
console.log(tx.charCodeAt(0));


// Extracting String Parts
// There are 3 methods for extracting a part of a string:
// it starts from 0 index

// slice(start, end)
// substring(start, end)
// substr(start, length)

let fruit = "Apple, Grapes, WaterMelon";
console.log(fruit.slice(0,5));
console.log(fruit.substring(7,13));
console.log(fruit.substr(15,10));

// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():

// let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);
let text3 = text1.toLowerCase();
console.log(text3);

// JavaScript String concat()
// concat() joins two or more strings:

let eat1 = "Apple";
let eat2 = "Grapes";
let eat3 = "Mango";
let eat = eat1.concat(" ",eat2," ",eat3);
console.log(eat);

// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()

// The trim() method removes whitespace from both sides of a string:
let val1 = "      Hello World!      ";
let val2 = text1.trim();
let val3 = text1.trimStart();
let val4 = text1.trimEnd();
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// JavaScript String Padding
// ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

let cv = "Farhan";
let now = cv.padStart(10,"0");
console.log(now);
let nex = cv.padEnd(10,"-");
console.log(nex);

let numb = 5;
console.log(typeof numb);
let ext = numb.toString();
console.log(typeof ext);
let padded = ext.padStart(4,"*");
console.log(padded);
let paded = ext.padEnd(4,"*");
console.log(paded);


// JavaScript String repeat()
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.

let nn = "Farhan ";
let oo = nn.repeat(5);
console.log(oo);

let pp = nn.replace("Farhan", "Student");
console.log(pp);

let aa = "I'm a good boy. I'm a good Expert. I'm not a bad boy.";
aa = aa.replaceAll("good", "CS");
aa = aa.replaceAll("boy", "Student");

console.log(aa);

// JavaScript String split()
// A string can be converted to an array with the split() method:

let pr = "I'm a good boy, I'm a good Expert, I'm not a bad boy.";
// let op = pr.split(",");
// console.log(op);
// console.log(op.at(0));
// console.log(op.at(1));
// console.log(op.at(2));

// let po = pr.split(" ");
// console.log(po);

let opo = pr.split("|");
console.log(opo);


// String Search Methods
// String indexOf()
// String lastIndexOf()
// String search()

// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

let inx = "Please locate where 'locate' where occurs!";
let indx = inx.indexOf("where");
console.log(indx);

let idx = inx.indexOf(`'locate'`);
console.log(idx);

let ix = inx.lastIndexOf("where");
console.log(ix);

let xr = inx.search("Please");
console.log(xr);

// The two methods, indexOf() and search(), are equal?
// They accept the same arguments (parameters), and return the same value?
// The two methods are NOT equal. These are the differences:
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

// JavaScript String match()
// The match() method returns an array containing the results of matching a string against a string (or a regular expression).

let ex = "The rain in SPAIN stays mainly in the plain";
let zx = ex.match("ain");
// let zx = ex.match(/ain/);
// let zx = ex.match(/ain/g);
console.log(zx);

let yx = "I love cats. Cats are very easy to love. Cats are very popular"
let iterator = yx.matchAll("Cats");
console.log([...iterator]); 


// JavaScript String includes()
// The includes() method returns true if a string contains a specified value.
// Otherwise it returns false.

let gtr = yx.includes("love");
console.log(gtr);

let gts = yx.startsWith("love");
console.log(gts);

let gta = yx.endsWith("popular");
console.log(gta);


let sentence = "this is the task in which i would write the first letter capital";
let task = sentence.charAt(0).toUpperCase() + sentence.slice(1);
console.log(task);