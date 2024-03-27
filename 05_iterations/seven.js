const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10}) // Map is also a call back function, just like for each. Which automatically returns value. 
console.log(newNums);

// Chaining (You can use two-three methods one by one which is known as Chaining)

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40) // While using filter only True values will be passed. 

// console.log(newNums);