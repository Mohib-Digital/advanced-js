// Spread Operator

// var anArr = [1, 2, 3, 4, 5, 6];
// console.log(...anArr)

// as a paramater rest operator use huta hai
// function addArr (...anArr) {
//   console.log(anArr)
//   let sumOfAllElements = 0;
//   for(var i = 0; i < anArr.length; i++) {
//     sumOfAllElements = sumOfAllElements + anArr[i]
//   }
//   console.log(sumOfAllElements);
// }


// // function calling k waqat ye spread operator use huta hai,
// addArr(...anArr);
// =============================================
// =============================================



// let myArr = ["Mohib Ullah", 21, 3028847209,  'Bara, Khyber',]
// // spread operator
// console.log(...myArr);


// // Destructuring
// // rest operator
// let [name, age, ...rest] = myArr;
// console.log(name);
// console.log(age);
// console.log(rest);
// ============================================
// ============================================


// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 10]


// old way to combine arrays
// let arr3 = arr1.concat(arr2);
// console.log(arr3)


// concat using of spread operator, advanced js
// let arr3 = [...arr1, ...arr2]
// console.log(arr3)
// ============================================
// ============================================




// spread operator with objects
let obj1 = {
  name : 'Mohib Ullah',
   address : 'Speen Qaber Bara, Khyber'
}

let obj2 = {
  age : 21
}


let obj3 = {...obj1, ...obj2}
console.log(obj3);
