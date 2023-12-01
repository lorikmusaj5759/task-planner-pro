/*
 * Filename: sophisticated_code.js
 * Content: A sophisticated and creative code example in JavaScript
 */

// Define a class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Define a function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Define an array of persons
const persons = [
  new Person("John", 25),
  new Person("Alice", 30),
  new Person("Bob", 45),
];

// Iterate over the array and greet each person
for (let person of persons) {
  person.greet();
}

// Perform some calculations using the factorial function
console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Factorial of 6: ${factorial(6)}`);
console.log(`Factorial of 7: ${factorial(7)}`);

// Define a class representing a geometric shape
class Shape {
  constructor(name, sides) {
    this.name = name;
    this.sides = sides;
  }

  // Method to calculate the perimeter of the shape
  calculatePerimeter() {
    let perimeter = 0;
    for (let side of this.sides) {
      perimeter += side;
    }
    return perimeter;
  }
}

// Define some shapes
const triangle = new Shape("Triangle", [3, 4, 5]);
const rectangle = new Shape("Rectangle", [4, 4, 4, 4]);
const pentagon = new Shape("Pentagon", [5, 5, 5, 5, 5]);

// Calculate and display the perimeters of the shapes
console.log(`Perimeter of ${triangle.name}: ${triangle.calculatePerimeter()}`);
console.log(
  `Perimeter of ${rectangle.name}: ${rectangle.calculatePerimeter()}`
);
console.log(`Perimeter of ${pentagon.name}: ${pentagon.calculatePerimeter()}`);

// Define a function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Check if numbers from 1 to 10 are prime
for (let i = 1; i <= 10; i++) {
  console.log(`${i} is prime: ${isPrime(i)}`);
}

// Define a class representing a car
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  // Method to start the car
  startEngine() {
    console.log(`The ${this.brand} ${this.model} engine has started.`);
  }

  // Method to stop the car
  stopEngine() {
    console.log(`The ${this.brand} ${this.model} engine has stopped.`);
  }
}

// Create an instance of a car
const myCar = new Car("Tesla", "Model S");

// Start and stop the car's engine
myCar.startEngine();
myCar.stopEngine();

// ... continue with more sophisticated code ...
// Including more classes, functions, data structures, algorithms, etc.

// This is a creative and complex JavaScript code example that demonstrates various concepts and features. It goes beyond a simple "hello world" or calculator program.