// Synchronous:
// Jab code ek sequence mein chal raha ho, matlab ek instruction dusre ke khatam hone ka intezaar kare, to usse synchronous programming kehte hain. Har kaam apni baari ka intezaar karta hai.


// Example 
// Yeh har ek line ek "instruction" hai:
// let x = 5;           // Variable ko value dena - ek instruction
// console.log(x);       // Console par value print karna - ek aur instruction
// x = x + 2;            // Variable ki value badalna - ek aur instruction
// console.log(x);       // Phir se value print karna - ek instruction

// ************************************************* //
// ************************************************* //



// Asynchronous:
// Asynchronous ka matlab hai ke code ek dusre ka intezaar nahi karta. Ek kaam chal raha ho aur saath saath doosra kaam bhi shuru ho jaye.


// Example 
// console.log("Start");          // Pehle yeh chalega
// setTimeout(() => {             // Asynchronous kaam - 2 second ke baad chalega
//   console.log("Hello Async");
// }, 2000);
// console.log("End");            // Yeh furran chalega, timer ka intezaar nahi karega

// Output
// Start
// End
// Hello Async

// ************************************************ //
// ************************************************ //




// Callback Hell
// Callback Hell tab hoti hai jab ek callback ke andar dusra callback, aur phir uske andar aur callbacks likhne parre.

// Example 01
// setTimeout(() => {
//   console.log("Step 1: Start");
//   setTimeout(() => {
//     console.log("Step 2: Process Data");
//     setTimeout(() => {
//       console.log("Step 3: Save Data");
//       setTimeout(() => {
//         console.log("Step 4: Complete");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);




// Example 02
// let printData = function (data, cb) {
//   console.log(data)
//   setTimeout ( () => {
//     if(cb) {
//       cb();
//     }
//   }, 2000)
// }


// printData("First Data", () => {
//   console.log(100)

//   printData("Second Data", () => {
//     console.log(200)

//     printData("Third Data", () => {
//       console.log(300)
//     })
//   })
// })

// ********************************************* //
// ********************************************* //




// Promise:
// JavaScript mein promise ek aisa object hai jo future ka result handle karta hai.
// Yeh ya to "kaam hogaya" (resolve) ya "kaam nahi hua" (reject) ka jawab deta hai.


// Example: 01
// let promise = new Promise ( (resolve, reject) => {
//   if (false) {
//     resolve('Success!');
//   } else {
  //     reject('Error!');
//   }
// }
// )

// promise.then( (result) => {
//   console.log(result)
// } ).catch( (error) => {
//   console.log(error)
// })




// Example: 02
// let promise = new Promise ( (resolve, reject) => {

//   setTimeout( () => {
//     resolve("Mission completed!")
//   }, 2000)

// } )

// promise.then( (result) => {
//   console.log(result);
//   console.log("Go, ahead!")
// } )





// Example: 03
// let promise = new Promise ( (resolve, reject) => {
//   setTimeout( () => {
//     let error = true;
//     if(error) {
//       resolve ( {username: "Mohib", password: 123} );
//     } else {
//       reject ( "failed!" );
//     }
//   }, 2000)
// } );



// Promise Chaining // Optional Chaining
// promise.then( (user) => {
//   console.log(user);
//   return user.username;
// } )
// .then( (userName) => {
//   console.log(userName);
// })
// .catch( (error) => {
//   console.log(error);
// } )
// .finally( () => {
//   console.log("The promise is completed!")
// });




// Example: 04
// to get data using APIs
// fetch('https://fakestoreapi.com/products/1')
// .then( (response) => {
//   return response.json();
// }
// )
// .then( (data) => {
//   console.log(data);
// }
// )
// .catch( (error) => {
//   console.log(error)
// })

// ********************************************* //
// ********************************************* //




// Async & Await

// Async Function: Jab kisi function ke saath "async" lagate ho, to wo hamesha ek promise return karega.

// to create async function
async function greet() {
  return "Hello, Mohib Ullah!";

}

greet().then( (result) => {
  console.log(result)
})

// "OR"

// let greet = async function () {
//   return "Hello, Mohib Ullah!";
// }

// greet().then( (result) => {
//   console.log(result)
// })





// await: "await" keyword "async" function ke andar use hota hai.
// Example: 01
// async function greet() {
//         console.log("This is step 1")
//  await  console.log("This is step 2")
//         console.log("This is step 3")
// }


// greet()
// console.log("This is step 4")
// console.log("This is step 5")

// Output:
// This is step 1
// This is step 2
// This is step 4
// This is step 5
// This is step 3




// Real Example
// async function data() {

//   let response = await fetch('//dummyjson.com/test');
//   return response.json();

// }

// data().then( (result) => {

//   console.log(result);

// }).catch( (err) => {

//   console.log(err);
// })


// Or

// async function data() {
//   try {
//     let response = await fetch('//dummyjson.com/tst'); 
//     return await response.json(); // JSON response return kar rahe hain
//   } catch (error) {
//     console.log("Error Part Executed:", error.message); // Error message print karte hain
//   }
// }

// // Call the function and handle the result
// data().then((result) => {
//   if (result) {
//     console.log("Success Part:", result); 
//   }
// });

// *************************************************** //
// *************************************************** //


// IFFE function