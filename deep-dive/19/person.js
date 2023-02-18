function Person(name) {
  this.name = name;
}

Person.prototype = {
  constructor: Person,
  sayHi() {
    console.log("Hello, My name is " + this.name);
  },
};

const james = new Person("james");
const john = new Person("john");
const smith = new Person("smith");
const jake = new Person("jake");

james.sayHi();
john.sayHi();
smith.sayHi = function () {
  console.log("Hi, My name is " + this.name);
};
smith.sayHi();
delete smith.sayHi;
smith.sayHi();
jake.sayHi();

console.log(james.constructor === Person);
console.log(john.constructor === Person);
console.log(smith.constructor === Person);
console.log(jake.constructor === Person);