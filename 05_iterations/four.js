// Objects
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// For in loop (This can be used for object iterations)

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) { // These if statement is generally not needed. 
//         const element = object[key];
        
//     }
// }

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// For-in loop for array 
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); // Map is uniterable that's why for-in loop will not work on it. 
// }