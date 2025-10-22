// Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()

// Waiting for a Timeout
// When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:

function myFunction() {
  console.log("I love You ❤️");
}
// Wait 3 seconds (3000 milliseconds) for this page to change.
// When you pass a function as an argument, remember not to use parenthesis.
setTimeout(myFunction, 3000);


// Using setInterval() to display the time every second (1000 milliseconds).
function myFunctions() {
  let d = new Date();
  console.log( d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}
setInterval(myFunctions, 1000);