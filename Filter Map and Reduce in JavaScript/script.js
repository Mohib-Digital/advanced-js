// filter 
// 1. filter Function
// filter aik aisi function hai jo array ke un elements ko nikaalta hai jo kisi specific condition ko meet karte hain.

// let arr = [1, 2, 3, 5, 6, 7, 8, 10];

// let filterd = arr.filter( (num) => {
//   // return num < 6;
//   return num % 2 === 0;
// })

// console.log(filterd)
// ****************************************** //



// 2. map Function
// map function array ke har item pe aik function apply karta hai aur result mein ek new array return karta hai. Matlab keh "array ke har item ko kuch change karke new array mein daal do."

// let arr = [1, 2, 3, 5, 6, 7, 8, 10];

// let newArr = arr.map( (num) => {
//   return num + 1;
// } )

// console.log(newArr); // new array
// console.log(arr) // main array



// Chaining method
// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num >= 40);

// console.log(newNums);
// ************************************* //



// 3. reduce Function
// reduce function array ke tamam elements ko combine karke aik single value mein convert karta hai.

const myNums = [1, 2, 3, 4, 5]; // Example array
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0); // Summing up the array elements

console.log(myTotal); // Output: 15




