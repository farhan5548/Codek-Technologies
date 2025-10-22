// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin"];
// const children = arr1.concat(arr2, arr3);
// console.log(children,typeof children);


const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterator
const list = fruits.entries();

// List the Entries
let text = "";
for (let x of list) {
  text += x;
}
console.log(text);