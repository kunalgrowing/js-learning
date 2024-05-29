// let score = 44
// let score = "44"
// let score = "44abc"
// let score = null
// let score = undefined
// let score = true
let score = "kunal"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);   // prints NaN which means Not a Number, 1 for true, 0 for false

// "44" => 44
// "44abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "kunal"

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "kunal" => true

let someNumber = 45

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);