// Generators
// Generator Function ka Structure
// Function ke sath * lagate hain: Ye batata hai ke ye generator hai.
// yield keyword: Ye value ko temporarily return kar ke function ko stop kar deta hai.
// next() method: Isse hum generator ko agay badhate hain, aur wo agle yield tak chalta hai.

// Example 01
// function* s1 () {
//   yield `Name: 'Mohib Ullah`;
//   yield `Class No: 484`;
// }

// let student = s1()
// console.log(student.next().value)
// console.log(student.next().value)

// you can use for loop on generator function
// for (let value of student) {
//   console.log(value)
// }

// ******************************************* //



// Example 02
// function* simpleGenerator() {
//   yield "Pehli value";  // ye function yahan ruk jayega
//   yield "Dusri value";  // phir yahan rukega
//   yield "Teesri value"; // aur phir yahan rukega
// }

// const gen = simpleGenerator();  // ye generator object banata hai
// console.log(gen.next().value);  // Output: "Pehli value"
// console.log(gen.next().value);  // Output: "Dusri value"
// console.log(gen.next().value);  // Output: "Teesri value"

// ******************************************//


// Example 03
function* counter() {
  let i = 0;
  while (true) {      // infinite loop jo kabhi rukta nahi
      yield i++;
  }
}

const count = counter();
console.log(count.next().value); // Output: 0
console.log(count.next().value); // Output: 1
console.log(count.next().value); // Output: 2
// is tarah ye tab tak chalta rahega jab tak hum `next()` call karte rahenge



