// function arthemeticFunction(a, b, anyFunction) {
//     const ans = anyFunction(a, b);
//     return ans;
// }

// function sum(a, b){
//     return a + b;
// }

// function minus(a, b){
//     return a - b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function divide(a, b){
//     return a / b;
// }
// function modulus(a, b){
//     return a % b;
// }

// const value = arthemeticFunction(10, 8, modulus)
// console.log(value);


// let counter = 30;
// const countdown = setInterval(() => {
//     console.log(counter);
//     counter --;

//     if (counter < 0) {
//         clearInterval(countdown); 
//     }
// }, 1000);

// function callbackFunction(a, b, nichewalaFunction){
//     let ans = nichewalaFunction(a, b);
//     return ans;
// }

// function sum(a, b){
//     return a + b;
// }

// let value = callbackFunction(10, 12, sum);
// console.log(value);

// let a = 5;

// let countdown = setInterval(() => {
//     console.log(a);
//     a--;

//     if(a<0){
//         clearInterval(countdown);
//     }
// }, 1000)

// function sum(a,b){
//     return a + b;
// }

// function sub(a,b){
//     return a - b;
// }

// function calculateAny(a, b, cb){
//     let ans = cb(a,b)
//     return ans;
// }


// let value = calculateAny(10, 2, sum)
// console.log(value);



// function abc(a, b, cb){
//     return cb(a,b);
// }

// let ans = abc(10, 2, sub)
// console.log(ans);

// (() => {

// })

// let count = 10;

// let countdown = setInterval(()=>{
//     console.log(count);
//     count--

//     if (count < 0) {
//         clearInterval(countdown)
//     }
// }, 1000)



// let count = 4; 

// let counter = setInterval(() => {
//     console.log(count);
//     count--;

//     if(count < 1){
//         clearInterval(counter);
//         console.log(`Your countdown is over`);
        
//     }
// }, 1000)


// function callback(a, b, belowFunction){
//     let value = belowFunction(a, b) 
//     // console.log(value);
//     return value
// }

// function sum(a, b){
//     return a + b;
// }

// function sub(a, b){
//     return a-b;
// }

// function mul(a,b){
//     return a*b;
// }

// function divide(a,b){
//     return a/b;
// }

// let ans = callback(10, 2, mod);
// console.log(ans);


// Map

let arr = [1, 2, 3, 4, 5];

function mainLogic(i){
    return i*2;
}

function filterLogic(i){
    if (i % 2 == 0) {
        return true;
    }else {
        return false;
    }
}

let mapAns = arr.map(mainLogic);
let filterAns = arr.filter(filterLogic);
console.log(mapAns);
console.log(filterAns);


// ++++++++++++++++Different Syntax to write Async Function ++++++++++++++++++

function adityaAsyncFunction(callback){
    // Do some async logic here
    callback("Hi there, I'm asynchonorous")
}

async function main(){
    adityaAsyncFunction(function(value) {
        console.log(value);
    })
}

main();

// ++++++++++++ Syntax 2 ++++++++++
function adityaAsyncFunction2() {
    let p = new Promise(function(resolve) {
        // do async logic here
        resolve("Hi there, I'm promisified asynchonorous")
    });
    return p;
}

function main2() {
    adityaAsyncFunction2().then(function(value2) {
        console.log(value2);
    })
}

main2();

function adityaAsyncFunction3() {
    let new_p = new Promise(function(resolve) {
        // do some async logic here 
        resolve("Hi there, I'm Async Await.")
    })
    return new_p;
}

async function main3(){
    const value3 = await adityaAsyncFunction3();
    console.log(value3);
}

main3();

// +++++++++++++++setTimeout Normal Version ++++++++++++
// In this function the caller will send callback as the input 
function normalSetTimeout(callback, duration){  // In this version a Callback is expected
    setTimeout(callback, duration)
}

normalSetTimeout(function(){
    console.log("I'm normal Async Function"); 
}, 2000)

// ++++++++++++ setTimeout Using promise +++++++++++
// This function returs a promise, in this version the function receives a promise in the output
function myOwnSetTimeout(duration) { // Here the Callback is not being expected.
    let p = new Promise(function (resolve) { // Promsise expects first argument as a function with a argument resolve.
        setTimeout(resolve, 1000)
    });
    return p;
}

myOwnSetTimeout(1000) // After the function is being called, let it performed the callback.
.then(function() {
    console.log("log the first thing");
})

// There's a library called FS-PROMISIFY that let's convert every asynchorous function into promisified function.