// Create an array
// let anArr = [1, 2, 3, 4, 5];
// console.log(anArr);



// Or
// array constructor
// let anArr = new Array(1, 2, 3, 4, 5);
// console.log(anArr)



// 1. Modifying Methods (Original array ko modify karte hain)

// push() method: // Adds element at the end.
// let arr = [1, 2, 3, 4];
// console.log(arr)

// arr.push(5);
// console.log(arr);

// ********************************* //



// pop() method: // Removes the last element.
// let arr = [1, 2, 3, 4];
// console.log(arr)

// arr.pop();
// console.log(arr)

// ********************************* //



// shift() method: Removes the first element.
// let arr = [1, 2, 3, 4];
// console.log(arr)

// arr.shift(); 
// console.log(arr)

// ********************************* //


// unshift method: Adds element at the beginning. Result:
// let arr = [1, 2, 3, 4];
// console.log(arr)

// arr.unshift('Mohib Ullah');
// console.log(arr)

// ********************************* //


// splice() method: // R emoves/Replaces/Adds elements. Removes 2 elements from index 1.
// let arr = ['Mohib Ullah', 484, 'Distt, Khyber', 24801];
// console.log(arr)

// let spliced = arr.splice(2, 1, "Khyber");
// console.log(arr)


 // ******************************** //



// sort() method: Sorts elements (default is ascending).
// let arr = ['Mohib Ullah', 484, 'Distt, Khyber', 24801];
// console.log(arr);

// arr.sort();
// console.log(arr);

// ********************************** //


// reverse() method: Reverses the array.
// let arr = [10, 15, 20, 25, 30];
// console.log(arr)

// arr.reverse();
// console.log(arr);

// ********************************** //




// fill() method:  Fills the array with a specific value
// let anArr = ['Mohib', 484, 22];
// console.log(anArr)

// let filled = anArr.fill("sahaba");
// console.log(anArr)

// ********************************* //




// 2. Accessing and Searching Methods

// concat() method: Combines arrays and return a new array.
// let arr1 = ['Mohib Ullah', 484, 'Khyber'];
// let arr2 = [24801, 3028847209];

// let newArray = arr1.concat(arr2);
// console.log(newArray);

// ********************************** //



// slice() method: Extracts part of the array.
// let myArr = [1, 2, 3, 4];
// console.log(myArr)

// let sliceArr = myArr.slice(1, 3);

// console.log(myArr)
// console.log(sliceArr)

// ********************************** //


// indexOf() method: Finds the index of the first occurrence of a value
// let newArr = [20, 25, 30, 35, 30, 45, 50]
// console.log(newArr)

// let indexedNum = newArr.indexOf(30);
// console.log(indexedNum); // result: 2

// ********************************** //



// lastIndexOf() method: Finds index of last occurrence of a value
// let newArr = [20, 25, 30, 35, 30, 45, 50]
// console.log(newArr)

// let lastIndexed =newArr.lastIndexOf(30);
// console.log(lastIndexed); // result: 4

// ************************************ //



// includes() method: Checks if an array includes a certain value.
// let arr = [1, 100, 89, 'Mohib']
// console.log(arr);

// let includedVal= arr.includes("mohib");
// console.log(includedVal); // false

// ************************************ //



// find() method: Finds the first element that satisfies a condition.
// let newArr = [20, 50, 30, 35, 30, 45, 50];
// console.log(newArr);

// let findEl = newArr.find( (numbers) => {
//   return numbers > 45;
// });

// console.log(findEl); result: 50.

// ************************************ //



// findIndex() method: Finds the index of the first element that satisfies a condition.
// let newArr = [20, 50, 30, 35, 30, 45, 50];
// console.log(newArr);

// let indexOffstEl = newArr.findIndex( (numbers) => {
//   return numbers > 45;
// });

// console.log(indexOffstEl); // result: 1.

// ********************************** //




// The at() method returns an element from an array using its index.

// Positive index: From start.
// Negative index: From end.

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.at(1));  // 20
// console.log(arr.at(-1)); // 50


// ********************************* // 





// 3. Iteration and Transformation Methods

// forEach() method: Executes a function for each array element.
// let newArr = [10, 2, 30, 4, 50]
// newArr.forEach( (el, idx) => {
//   console.log('elment is:', el, 'index is:', idx);
// })

// ********************************* //


// map() method: Creates a new array from calling a function for every array element.
// let newArr = [1, 2, 3, 4, 5]
// let doubled = newArr.map( (el) => {
//   return el * 2
// }
// ); 

// console.log(doubled)

// ********************************* // 



// filter() method: Creates a new array with elements that satisfy a condition.
// let newArr = [1, 2, 3, 4, 5];
// let filtered = newArr.filter( (el) => {
//  return el > 2;
// } 
// );

// console.log(filtered);
// ********************************* //


// reduce() method: Reduces the array to a single value.
// let newArr = [1, 2, 3, 4, 5];
// let sum = newArr.reduce( (acc, curVal) => { 
//   return acc + curVal;
// }, 0);

// console.log(sum)

// ********************************* //



// flat() method:  nested array sy ek single-level array banata hai.

// let flatArr = [1, [2, 3], [4]].flat();
// let flatArr = [1, [2, [3, [4]]]].flat(2);

// console.log(flatArr);

// ******************************** //




// 4. Testing Methods

// every() method: Checks if all elements pass a specific condition.
// let newArr = [1, 2, 3, 4, 5];
// let chk = newArr.every( (el) => {
//   return el > 4;
// });

// console.log(chk)

// ******************************* //




// some() method: Checks if any elements pass a specific condition.
// let newArr = [1, 2, 3, 4, 5];
// let chk = newArr.some( (el) => {
//   return el > 4;
// });

// console.log(chk)

// ******************************* //




 
// 5. String Conversion Methods

// join() method: Joins elements into a string.
// let newArr = ["Mohib", "Afridi"]

// let convertIntoStr = newArr.join(' ');

// console.log(convertIntoStr);

// ******************************* //





// toString() method: Converts array to string.
// let newArr = ["Mohib", "Afridi"]

// let convertIntoStr = newArr.toString();

// console.log(convertIntoStr);


// ******************************* //           




// 6. Array Creation Methods

// Array.from() method: Converts iterable (string) to array.
// let str = 'Mohib Afridi';

// let arr = Array.from(str)

// console.log(arr)

// ****************************** //




// Array.of() method: Creates array from arguments.

// let arrOf = Array.of(101, 50, 202);

// console.log(arrOf);

// ***************************** //





