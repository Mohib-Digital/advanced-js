// Destructuring in JavaScript

// create an array
// let arr = ['Mohib Ullah', 21];

// befor destructuring putting values in the variables
// let name = arr[0]
// let age = arr[1]


// putting values in a varaibles using destructuring
// Desturcturing
// let [name, age] = arr;
// console.log(name);
// console.log(age);

// neasted array
// let anArr = [1, 2, 3, [4, 5]];
// console.log(anArr)

// // Destructuring of array
// let [one, two, three, [four, five]] = anArr;

// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)
// console.log(five)



// let anArr = ['Mohib Ullah', 44, 'Peshawar'];

// destructuring 
// rest operator
// let [myName, ...rest] = anArr;

// console.log(myName, rest)
// console.log(rest)

// // again destructuring of rest operator
// let [age, loc] = rest;

// console.log(age)
// console.log(loc)



// create array
// function s1([field, rollNum, uni]) {
//   console.log(field)
//   console.log(rollNum)
//   console.log(uni)
// }

// s1(['BSCS', 484, 'Agriculture Uni Peshawar'])


// "Or" 


// function s1() {
//   return ['BSCS', 484, 'Agriculture Uni Peshawar'];
// }

// let [field, rollNum, uni] = s1()
// console.log(field)
// console.log(rollNum)
// console.log(uni)

// =====================================
// =====================================

// Distructuring of objects
// let user = {
//   name : 'Mohib Ullah',
//   age : 25,
//   city : 'Peshawar'
// }


// console.log(user);
// console.log(user.name)
// console.log(user.city)
// console.log(user.age)


// Destructuring of object
// let {name, age, city} = user;
// console.log(user)
// console.log(name)
// console.log(city)
// console.log(age)

// Destructuring of object
// let {name: n, age: a, city: c} = user;
// Short names for variables, which n represent name etc.
// console.log(a)