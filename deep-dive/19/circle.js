// console.time("for");

// function Circle(radius) {
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2 * this.radius;
//   };
//   this.getArea = function () {
//     return Math.PI * this.radius * this.radius;
//   };
// }

// let circle1 = new Circle(5);
// let circle2 = new Circle(10);

// console.log(circle1.getArea === circle2.getArea);

// console.log(circle1.getDiameter());
// console.log(circle1.getArea());
// console.log(circle2.getDiameter());
// console.log(circle2.getArea());

// console.timeEnd("for");

console.time("for");

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getDiameter = function () {
  return 2 * this.radius;
};

Circle.prototype.getArea = function () {
  return Math.PI * this.radius * this.radius;
};

let circle1 = new Circle(5);
let circle2 = new Circle(10);

console.log(circle1.getArea === circle2.getArea);

console.log(circle1.getDiameter());
console.log(circle1.getArea());
console.log(circle2.getDiameter());
console.log(circle2.getArea());

console.timeEnd("for");