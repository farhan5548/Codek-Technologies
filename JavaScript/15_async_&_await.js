// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

// Example
// async function myFunction() {
//   return "Hello";
// }
// Is the same as:
// function myFunction() {
//   return Promise.resolve("Hello");
// }
// Here is how to use the Promise:
// myFunction().then(
//   function (value) {
//     /* code if successful */
//   },
//   function (error) {
//     /* code if some error */
//   }
// );

// Await Syntax
// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues.
// let value = await promise;

// async function myDisplay() {
//   let myPromise = new Promise(function(resolve, reject) {
//     resolve("I love You ❤️");
//   });
//   console.log(await myPromise);
// }

// myDisplay();

async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hi Brother!");
    }, 3000);
  });
  console.log(await myPromise);
}
myDisplay();

// https://api.github.com/users/farhan44165
// https://free-apis.github.io/#/browse