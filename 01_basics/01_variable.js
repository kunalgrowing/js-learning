const accountId = 23536
let accountEmail = "kunal@google.com"
var accountPassword = "54365"
accountCity = "Jaipur"
let accountState;

// accountId = 3    // not allowed

accountEmail = "kst@kst.com"
accountPassword = "5438"
accountCity = "Siliguri"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
