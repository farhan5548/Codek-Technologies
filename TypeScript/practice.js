// function createPair<S, T>(v1: S, v2: T): [S, T] {
//   return [v1, v2];
// }
// console.log(createPair<string, number>('hello', 42));
function noName(a, b) {
    return [a, b];
}
;
// console.log(noName<string,number>("Lucky Number",44));
// Union
var value;
value = "Pakistan";
// console.log(value);
value = 1947;
var personName = { name: "Farhan", job: "Web-Developer" };
function area(shape) {
    switch (shape.form) {
        case "circle":
            return Math.pow(Math.PI, shape.radius);
        case "rectangle":
            return shape.width * shape.length;
    }
}
console.log(area({ form: "circle", radius: 5 }));
console.log(area({ form: "rectangle", length: 5, width: 3 }));
