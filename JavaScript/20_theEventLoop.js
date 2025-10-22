// Task 1
console.log("start");
// Task Queue | MacroTask
setTimeout(() => {
  console.log("Timeout");
},0);
// MicroTask
Promise.resolve().then(() => {
  console.log("Promise");
});
console.log("End");



// Task 2
console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 100);
const startTime = Date.now();
while (Date.now() - startTime < 2000) {
}
console.log("End");


// Task 3
console.log('Start');
queueMicrotask(() => {
  console.log('Microtask');
});
setTimeout(() => {
  console.log('setTimeout');
}, 0);
console.log('End');
