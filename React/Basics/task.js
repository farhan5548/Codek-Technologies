let myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation completed successfully!");
  } else {
    reject("Operation failed!");
  }
});
console.log(myPromise);


//                  API
// const URL = "https://fakestoreapi.com/products";
// const myData = async () => {
//     console.log("Fetching Api data by Async Function");
//     const access = await fetch(URL);
//     const data = await access.json();
//     console.log(data);
// }
// myData();
