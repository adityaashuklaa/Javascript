// Truthy Values (Values which are being assumed of being true and false are truthy and falsy values.)
const userEmail = "aditya.com"
const userEmail2 = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// Statement to check whether an array is empty or not. 
// if (userEmail2.length === 0) {
//     console.log("Array is empty");
// }

// Statement to check whether an object is empty or not. 
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Comparsions 
// False == 0 Output : true
// False == "" Output : true
// 0 == "" Output : true

// Nullish Coalescing Operator (??): null undefined (To give safety check when null and undefined values occur)

let val1;
// val1 = 5 ?? 10 Always consider first value. 
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator (Small syntax of if-else for aalsi people)

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")