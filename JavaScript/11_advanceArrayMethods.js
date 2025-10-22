// map(): Creates a new array by applying a provided function to each element of the original array. This is ideal for transforming data without modifying the original array.
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((num) => num * 2); // [2, 4, 6]
console.log(doubledNumbers);

// filter(): Creates a new array containing only elements that satisfy a provided testing function. This is useful for selecting specific elements from an array.
const numbers_f = [1, 2, 3, 4, 5];
const evenNumbers = numbers_f.filter(num => num % 2 === 0); // [2, 4]
console.log(evenNumbers);

// forEach(): Executes a provided function once for each array element. Unlike map() and filter(), forEach() does not return a new array; it's typically used for side effects like logging or updating external state.
const fruits_fe = ['apple', 'banana'];
fruits_fe.forEach(fruit => console.log(fruit)); // logs 'apple', then 'banana'
console.log(fruits_fe);

// reduce(): Executes a reducer function on each element of the array, resulting in a single output value. This is powerful for tasks like summing values, building objects, or flattening nested arrays.
const numbers_r = [1, 2, 3, 4];
const sum = numbers_r.reduce(
  (a, b) => a + b);
console.log(sum);

// find(): Returns the value of the first element in the array that satisfies a provided testing function. If no element satisfies the condition, undefined is returned.
const users_f = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const foundUser = users_f.find(user => user.id === 2); // { id: 2, name: 'Bob' }
console.log(foundUser);

// findIndex(): Returns the index of the first element in the array that satisfies a provided testing function. If no element satisfies the condition, -1 is returned.
    const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
    const foundIndex = users.findIndex(user => user.name === 'Alice'); // 0
console.log(foundIndex);

// some(): Checks if at least one element in the array satisfies a provided testing function, returning true or false.
    const numbers_s = [1, 2, 3, 4];
    const hasEven = numbers_s.some(num => num % 2 === 0); // true
console.log(hasEven);

// every(): Checks if all elements in the array satisfy a provided testing function, returning true or false.
const numbers_e = [2, 4, 6];
const allEven = numbers_e.every(num => num % 2 === 0); // true
console.log(allEven);

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. This method modifies the original array.
const fruits = ['apple', 'banana', 'cherry'];
fruits.splice(1, 1, 'orange'); // removes 'banana', adds 'orange'. fruits is now ['apple', 'orange', 'cherry']
console.log(fruits);

// slice(): Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array is not modified.
const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.slice(1, 4); // [2, 3, 4]
console.log(newArray);

// flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const nestedArray = [1, [2, 3], [4, [5]]];
const flattenedArray = nestedArray.flat(Infinity); // [1, 2, 3, 4, 5]
console.log(flattenedArray);

// flatMap(): Combines map() and flat() into a single method, first mapping each element using a mapping function, then flattening the result into a new array.

const sentences = ['hello world', 'how are you'];
const words = sentences.flatMap(sentence => sentence.split(' ')); // ['hello', 'world', 'how', 'are', 'you']
console.log(words);
