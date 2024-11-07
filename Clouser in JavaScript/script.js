// Lexical scoping
// Lexical scope ka matlab hai ke inner function apne surrounding (outer) environment ke variables ko access kar sakta hai,
// Or 
// Lexical scope ka matlab hai ke function apne likhne (define karne) ke waqt jo outer environment hai, uske variables ko access kar sakta hai. Jab ek function kisi doosre function ke andar likha jata hai, to inner function ko outer function ke variables use karne ki permission hoti hai

// Example: 
// function outer() {
//   var name = "Mohib";
  
//   function inner() {
//     console.log(name); 
//   }
  
//   inner(); 
// }

// outer(); // Ye output karega "Mohib"

// ============================================= //
// ============================================= //




// Closure
// Jab ap eik function ko uske required data k sath bind kr dete hu, tu wo eik closure ban jata hai.
// Closure is the combination of function and its required data or lexical scope.



// Example: 01
// function adder(num) {

//   function add(b) {
//       console.log(num + b);
//   }

//   return add;

// }

// const addTo5 = adder(5);
// // console.log(addTo5); 
// addTo5(2)
// addTo5(5)



// Example: 02
// function makeNumCounter() {
//   let count = 1;

//   function increment() {
//     console.log(count++);
//   }

//   return increment;

// }

// const countNum = makeNumCounter();
// console.log(countNum);
// countNum();




// function secretMessage() {
//   let message = "Ye aik secret message hai!";

//   return function() {
//     console.log(message); // inner function ko 'message' ki access hai
//   };
// }

// const showMessage = secretMessage();
// showMessage(); // Output: Ye aik secret message hai!




// function greet(name) {
//   return function() {
//     console.log("Hello, " + name + "!"); // inner function 'name' ko yaad rakhta hai
//   };
// }

// const greetMohib = greet(12);
// greetMohib(); // Output: Hello, Mohib!





