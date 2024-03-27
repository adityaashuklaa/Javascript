// for of loop (Array Specific loop)

// ["", "", ""] Strings inside array
// [{}, {}, {}] Objects inside array


// for (const iterator of object) {
    // (syntax of for of loop)
    // }

    const arr = [1, 2, 3, 4, 5]
    for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`) // Will print hello world including space. 
}

// Maps (Just like arrays which have unique values and type is object, repetition is not allowed of values and remains in order.)

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) { // [] in square brackets you can uniquely enter values you wanna have. Selecting particular values in [] brackets is nothing but DESTRUCTING. 
    // console.log(key, ':-', value);
}

// loop on object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } // It is not iterable like map which is also a object. It has different syntax. That's why for of doesn't work with objects. 