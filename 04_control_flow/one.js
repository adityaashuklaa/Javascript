// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, == (Equals To), !=, === (Strict Check), !== (Checks -ve sign)

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); Power is not defined cause it's being outside of the scope. 


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");  (Unreadable code.) Implicit Scope

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { // && => AND operator (Checks both the statement is true or not)
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // || => OR operator (Checks if any statement is true or not)
    console.log("User logged in");
}