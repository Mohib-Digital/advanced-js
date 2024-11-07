// Explanation of Scope:
// JavaScript defines boundaries for variable accessibility, which we call scope. There are two main types of scope:

// Global Scope: Variables declared outside any block or function are globally scoped and can be accessed from anywhere in the code.
// Local Scope: Variables declared within a block or function are locally scoped.


// Global Scope Variables
// These variables can be accessed from anywhere in the code.

// var a = 10;
// let b = 11;
// const c = 12;

// Accessing global variables within a block
// if (true) {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }

// Accessing global variables within a function
// function printValues() {
//   console.log(a)
//   console.log(b)
//   console.log(c)
// }

// printValues()

// ===================================================== //


// Local Scope Variables
// These variables can only be accessed within the block or function they are defined in.
// if (true) {
//   let b = 11;
//   const c = 12;
//     console.log(b)
//     console.log(c)
// }


// console.log(b); // error: b is not defined (outside the block scope)
// console.log(c); // error: c is not defined (outside the block scope)



// // Local Scope in a function
// function print() {
//   let b = 11;
//   const c = 12;
//     console.log(b)
//     console.log(c)
// }


// print()

// console.log(b); // error: b is not defined (outside the function scope)
// console.log(c); // error: c is not defined (outside the function scope)

// ==================================================== //


// Difference between Block Scope and Function Scope
// Block Scope
// if(true) {
//   let a = 1;
//   const b = 2;
//   var c = 3;
// }


// console.log(a); // error: a is not defined (let is block-scoped)
// console.log(b); // error: b is not defined (const is block-scoped)
// console.log(c); // output: 3 (var is function-scoped or globally scoped if outside a function)



// Function Scope
// function printNum() {
//   let a = 1;
//   const b = 2;
//   var c = 3;
// }

// console.log(a); // error: a is not defined (a is scoped to printNum function)
// console.log(b); // error: b is not defined (b is scoped to printNum function)
// console.log(c); // error: c is not defined (c is scoped to printNum function)
