const accountId = 144553 //Const are variables which stores constant values which don't change.
let accountEmail = "hitesh@google.com" //Can be changed in future. 
var accountPassword = "12345"
accountCity = "Jaipur" //JS is safe language cause without defining any variable you can store data. But it's not Correct.
let accountState;

// accountId = 2 // not allowed, cause accountID is defined in const


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) 