const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //String Interpolation

const gameName = new String('hitesh-hc-com') //Syntax to declare a string 

// console.log(gameName[0]);
// console.log(gameName.__proto__); returns an object


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); 
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // Substring ignores -ve sign and consider it as 0
console.log(newString);

const anotherString = gameName.slice(-8, 4) // -ve value will start slicing from backwards of the string.
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //Trims the extra added spaces.

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // url includes sundar or not, it returns value in boolean.

console.log(gameName.split('-')); //split using given parameter