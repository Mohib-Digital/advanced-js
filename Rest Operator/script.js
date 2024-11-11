// Rest Operator in javaScript

// let anAry = ['Mohib Ullah', 1, 22, 3, 4, 5];


// function resultFuntion(name, ...args) {

//   console.log(name);
//   console.log(args);

//   for (let i in args) {
//     let total = 0;
//     for (var index = 0; index < args.length; index++){
//       total = total + args[index];
//     }
    
//     console.log(`Hello ${name}! Your total marks is ${total}.`);
//   }

// }

// resultFuntion('Mohib Ullah', 1, 22, 3, 4, 5) // spread the elements of an array





let numbs = [1, 3, 4, 3, 5];
console.log(...numbs) // separat values
console.log([...numbs]) // covert separated elements to an array using rest operator