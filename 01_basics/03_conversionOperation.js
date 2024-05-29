// let score = 44
// let score = "44"
// let score = "44abc"
// let score = null
// let score = undefined
// let score = true
let score = "kunal"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);   // prints NaN which means Not a Number, 1 for true, 0 for false

// "44" => 44
// "44abc" => NaN
// true => 1; false => 0

// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "kunal"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "kunal" => true

let someNumber = 45

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof stringNumber);


// ****************************** Operations ********************************* //

let value = 4
let negValue = -value

// console.log(negValue);

// console.log(2+2);    => 4
// console.log(2-2);    => 0
// console.log(2*2);    => 4
// console.log(2**3);   => 8
// console.log(2/3);    => 0.6666666666666666
// console.log(2%3);    => 2

let str1 = "hello"
let str2 = " kunal"
let str3 = str1 + str2

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(3 + 4 * 5 % 3)   // not recommended, always practice clean code and use parenthesis
// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter);
++gameCounter
console.log(gameCounter);