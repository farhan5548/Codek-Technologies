// function createPair<S, T>(v1: S, v2: T): [S, T] {
//   return [v1, v2];
// }
// console.log(createPair<string, number>('hello', 42));

function noName<str, num>(a: str, b: num): [str, num] {
  return [a, b];
};
// console.log(noName<string,number>("Lucky Number",44));

// Union
let value: string | number;
value = "Pakistan";
// console.log(value);
value = 1947;
// console.log(value);


// Intersection
type employee = { name: string };
type work = { job: string };
type person = employee & work;
const personName: person = { name: "Farhan", job: "Web-Developer" };
// console.log(personName);

// Descriminent Union
type Circle = { form: "circle", radius: number };
type Rectangle = { form: "rectangle", length: number, width: number };
type Shape = Circle | Rectangle;
function area(shape: Shape) {
  switch (shape.form) {
    case "circle":
      return Math.PI ** shape.radius;
    case "rectangle":
      return shape.width * shape.length;
  }
}

// console.log(area({form:"circle", radius:5}));
// console.log(area({form:"rectangle", length:5, width:3}));

interface xyz{

}
interface xyz {
  
}