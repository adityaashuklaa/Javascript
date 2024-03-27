const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // This is used for current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam" // Context is being changed here, username from = "Hitesh" to = "Sam"
// user.welcomeMessage()

// console.log(this); will return {} empty object cause there is no global context here. But in browser it will show window(it's a global object) 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => { // Explicit method
//     return num1 + num2 //If you're using {curly braces} then it's mandatoryto write return.
// }

// const addTwo = (num1, num2) =>  num1 + num2  //Implicit Return method (no use of paranthesis and return keyword.)

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // Objects should always wrapped inside ()


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()