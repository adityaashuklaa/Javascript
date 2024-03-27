// On the basis of how the data is being stored in the memory and is accessed categorise the data types into 2
//  Primitive (Stored in Stack memory)

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) (Stored in Heap Memory)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//type of array = object
//type of function = object (function)
//type of object = object

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3