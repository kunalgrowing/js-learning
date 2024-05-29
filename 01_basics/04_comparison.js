// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);    // (1)
// console.log(null < 0);    // (2)
// console.log(null == 0);   // (3)
// console.log(null >= 0);   // (4)
// console.log(null <= 0);   // (5)
// console.log(null != 0);   // (6)

/*
the reason is that an equality check == and comparisons < > <= >= work differently.
comparisons convert null to a number, treating it as 0.
that's why (1), (2) and (3) are false but (4), (5) and (6) are true
*/

// console.log(undefined < 0);
// console.log(undefined == 0);
// console.log(undefined > 0);

// === strictly checks the datatypes too

console.log("2" == 2);
console.log("2" === 2);   // returns false because the datatypes are different