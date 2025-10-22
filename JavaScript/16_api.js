// A Web API is a developer's dream.
// It can extend the functionality of the browser
// It can greatly simplify complex functions
// It can provide easy syntax to complex code

// What is Web API?
// API stands for Application Programming Interface.
// A Browser API can extend the functionality of a web browser.
// A Server API can extend the functionality of a web server.

// const url =  "https://api.github.com/users/farhan44165"
// async function myFunction() {
//     const data = await fetch(url)
//     const response = await data.json()
//     console.log(response);
// }
// myFunction();


// GET
// fetch("https://fakestoreapi.com/products/1")
//   .then((response) => response.json())
//   .then((items) => console.log(items));

// POST
// const data = { name: "Pranjal", age: 25 };
// fetch("https://fakestoreapi.com/products", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((result) => console.log(result));

// PUT
// const updatedData = { id: 1, price: 400 };
// fetch("https://fakestoreapi.com/products/1", {
//   method: "PUT",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(updatedData),
// })
//   .then((response) => response.json())
//   .then((result) => console.log(result));

// DELETE
// fetch("https://fakestoreapi.com/products/1", {
//   method: "DELETE",
// })
//   .then((response) => response.json())
//   .then((result) => console.log("Deleted:", result));

// const URL = "https://fakestoreapi.com/products";

// const getAPi = async () => {
//   console.log("Getting APi data");
//   let response = await fetch(URL);
//   console.log(response);
//   let data = await response.json();
//   console.log(data);
// };
const URL = "https://fakestoreapi.com/products";
const myData = async () => {
    console.log("Fetching Api data by Async Function");
    const access = await fetch(URL);
    const data = await access.json();
    console.log(data);
}
myData();
