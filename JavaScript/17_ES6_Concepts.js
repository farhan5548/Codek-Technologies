// We may have an array or object that we are working with, but we only need some of the items contained in these.
// Destructuring makes it easy to extract only what is needed.


const vehicles = ['mustang', 'f-150', 'expedition'];
const [car, truck, suv] = vehicles;
console.log(car);

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);
console.log("Addition: ", add);
console.log("Subtraction: ", subtract);
console.log("Multiplication: ", multiply);
console.log("Division: ", divide);


// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021, 
//   color: 'red'
// }

// myVehicle(vehicleOne);

// // old way
// function myVehicle(vehicle) {
//   const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
// }


// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021, 
//   color: 'red'
// }

// function myVehicle({type, color, brand, model}) {
//   const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
//   console.log(message);
// };

// myVehicle(vehicleOne);


const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}


function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
  console.log(message);
};
// myVehicle(vehicleOne);



// Spread/Rest Operators
// The spread operator is often used in combination with destructuring.

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);


// Rest Operator (...)
// The rest operator is used to collect multiple elements into a single array. It is typically found in function parameters or array/object destructuring assignments.
    const numbers = [1, 2, 3, 4, 5];
    const [first, second, ...restOfNumbers] = numbers;
    // first is 1, second is 2, restOfNumbers is [3, 4, 5]
    console.log(first);
    console.log(second);
    console.log(restOfNumbers);

    const person = { name: 'John', age: 30, city: 'New York' };
    const { name, ...otherInfo } = person;
    // name is 'John', otherInfo is { age: 30, city: 'New York' }
    console.log(name);
    console.log(otherInfo);

// Default Parameters
  function multeply(a, b = 1) {
  return a * b;
};

console.log(multeply(5, 2));
// Expected output: 10

console.log(multeply(5));
// Expected output: 5
