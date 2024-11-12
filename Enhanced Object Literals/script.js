// Enhanced Object Literals

// Create Object
// let obj1 = {
//   name : 'Mohib Ullah',
//   age : 21,
//   contact : 3028847209,
// }

// console.log(obj1)
// ======================================

// or 

// let name = 'Mohib Ullah';
// let age = 21;
// let contact = 3028847209;

// let obj2 = {
//   name : name, 
//   age : age, 
//   contact : contact,
// }

// console.log(obj2)
// ======================================


// in ES6 using object literals
// let name = 'Mohib Ullah';
// let age = 21;
// let contact = 3028847209;

// let obj3 = {
//   name,
//   age,
//   contact
// }

// console.log(obj3)


// or 

// let n = 'name';
// let a = "age";
// let c = 'contact';

// let obj4 = {
//   [n] : "Kamran Khan", // n === name
//   [a] : 23, // a === age
//   ["personal" + c] : 3028847209,
//   phoneDetail : function () {
//     return `Hello! viewer, ${this.personalcontact} is the ${this.name} contact number.`;
//   }
// }

// console.log(obj4)
// console.log(obj4.name)
// console.log(obj4.age)
// console.log(obj4.personalcontact); // or
// // console.log(obj4["personal" + c])
// console.log(obj4.phoneDetail())
// ========================================



// befor ES6 JS
// let obj5 = {
//   myName : 'Mohib Ullah',
//   show : function () {
//     console.log(this.myName)
//   }
// }

// obj5.show()


// after ES6 JS
// let obj5 = {
//   myName : 'Mohib Ullah',
//   show() {
//     console.log(this.myName)
//   }
// }

// // calling function 
// obj5.show(); // or
// obj5['show']();
// =========================================



let fname = 'Mohib';
let lname = 'Afridi';
let rollNum = 484;

function std (fn, ln, rollNumb) {

  let fullName = `${fn} ${ln}`;
  return {fullName, rollNumb}
}

let std1 = std(fname, lname, rollNum);
console.log(std1);
console.log(std1.fullName);
console.log(std1.rollNumb);














