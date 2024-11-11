// Default Parameter in JavaScript
// Ye function kaam karta hai kisi ko greet karne ke liye
// Agar koi specific message nahi diya, toh default "Hello" use hoga
function greeting(greet = "Hello") {
  console.log(greet);
}

// Jab kuch bhi na diya jaye function ko call karte waqt,
// toh ye "Hello" print karega, jo default value hai.
greeting();  // Output: "Hello"

// Agar hum koi specific message dein,
// toh default value overwrite ho jayegi aur humara message print hoga.
greeting("Hello Mohib! Pleased to meet you.");  // Output: "Hello Mohib! Pleased to meet you."
