// Storing values in a package is basically function. 
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() //sayMyName is a function reference, and to execute it use ()

function addTwoNumbers(number1, number2){ // Function defination is known as Parameters (number1, number2)
    console.log(number1 + number2);
}

addTwoNumbers(3, 4) //You've to pass arguments cause without it function will only be called as no values is being passed.

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result //After return keyword function will not perform anything. 
    return number1 + number2 //2nd method for executing function
}

const result = addTwoNumbers(3, 5) // Function call back is known as arguements. 

// console.log("Result: ", result); //It will eturned undefined as returned keyword is not being used. 


function loginUserMessage(username = "sam"){ // Declaring predefined values of username, which never will be undefined. 
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage()) //if no value is being passed than the output is undefined. 


function calculateCartPrice(val1, val2, ...num1){ // ...num1 is a rest operator which gives an array.
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));