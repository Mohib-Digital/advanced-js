// Iterable: Wo cheez jis par tum loop chala sakte ho, aur elements ko eik eik karke access kar sakte ho. (jaise array, string, set, etc).

// for in loop 
// for in loop JavaScript ka purana concept hai.
// Definition: for...in loop mainly objects ke properties ya keys ko print karne ke liye use hota hai. Yeh arrays par bhi lagaya ja sakta hai, magar iska asal maqsad objects ko loop karna hai.


// const student = {
//   name: "Mohib",
//   age: 21,
//   course: "Web Development"
// };

// Yeh method tumhe ek array deta hai, jo ke tumhe without loop saari keys de sakta hai.
// console.log(Object.keys(student))


// for in loop
// for (let key in student) {
//   console.log("Key :", key) // Har property key print karega: "name", "age", "course"
  // console.log("Values :", student[key]) // Har key ki value print karega: "Mohib", 21, "Web Development"
// }




// const colors = ["red", "green", "blue"];

// for (let index in colors) {
//   console.log(index);       // Indexes print karega: 0, 1, 2
//   console.log(colors[index]); // Values print karega: "red", "green", "blue"
// }
// ===============================================


// for of loop
// Ye loop ES6 mai include kia gia hai
// specific element ko print krne k lye use huta hai

// const subMarks = [60, 65, 76, 85, 90];

// for (let marks of subMarks) {
//   console.log(marks)
// }



// const myName = 'Mohib Afridi';

// for (let char of myName) {
//   console.log(char)
// }








