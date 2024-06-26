// Primitive

// 7 types : String, Number, BigInt, Symbol, Boolean, null, undefined

// const score = 100
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null

// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3472585743256843265746n

// Reference (non primitive)

// Objects, Arrays, Functions

// const heroes = ["kunal", "singh", "tawar"];

// let myObj = {
//   name: "kunal",
//   age: 22
// }

// const myFunction = function() {
//   console.log("Hello world!");
// }

// console.log(typeof bigNumber);

// console.log(typeof outsideTemp);

// console.log(typeof scoreValue);

// console.log(typeof myFunction);

// console.log(typeof anotherId);


// ************************** Stack & Heap memory in JS ***************************

// Stack (primitive) & Heap (non-primitive)

let myYoutubeName = "kunalsinghtawardotcom"   // gets stored into stack as it is of primitive type variables
let anotherName = myYoutubeName
anotherName = "kunalgrowing"
console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl"
}

userTwo = userOne

userTwo.email = "kunal@google.com"

console.log(userOne.email);
console.log(userTwo.email);