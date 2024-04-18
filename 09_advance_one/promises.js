const promiseOne = new Promise(function(resolve, reject){ // new keyword is used for new Instance. 
    //Do an async task
    // DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // resolve is method which has to be called to build connection between .then hence making a true Promise. 
    }, 1000)
})

promiseOne.then(function(){ // Promise is being Consumed using (.then) .then ka seedha connection hain resolve ke sath. 
    console.log("Promise consumed");
})

// 2nd Syntax. 
new Promise(function(resolve, reject){ // It's not necessary to hold Promise in any Variable. 
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"}) // Objects is being declared in resolve Parameter. 
    }, 1000)
})

promiseThree.then(function(user){ // Which is being accesed here. 
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// Promise Consumption
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => { // When old .then value is being stored in new .then It's CHAINING, important Concept for Database connection.
    console.log(username);
}).catch(function(error){ // .catch handles the error. 
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// Async Await Syntax. (it waits a little to complete the work or throw error immediately as soon as it occurs.)

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() // response.json takes time to convert string data into json format so await keyword is being used. 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// Doing this using .then .ctach method
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => { // response is nothing but a variable name. 
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.