// CallBack Function in JavaScript
// A callback is a function passed as an argument to another function.


// example : 01
// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, (something) => {
//   document.getElementById("demo").innerHTML = something;
// });



// Example 02
// function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback(); // Callback function call ho raha hai
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greet("Mohib", sayBye);




// example: 03
// Callback with Anonymous Function
// Anonymous functions woh hote hain jin ka naam nahi hota. Aap callback ke liye directly anonymous function bhi pass kar sakte hain.

// function processUserInput(name, callback) {
//   console.log(`Processing user: ${name}`);
//   callback(name);
// }

// processUserInput("Mohib", function (userName) {
//   console.log(`Welcome to the platform, ${userName}!`);
// });




// Example: 04
// Custom Callback Logic
// function calculate(a, b, operation) {
//   return operation(a, b); // Callback function ko execute kiya
// }

// function add(x, y) {
//   return x + y;
// }

// function multiply(x, y) {
//   return x * y;
// }

// console.log(calculate(5, 3, add));       // Output: 8
// console.log(calculate(5, 3, multiply));  // Output: 15


