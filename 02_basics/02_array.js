const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) It will create a problem of array being inside an array. 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) Combines two arrays and returns a new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator

console.log(all_new_heros);
console.log(typeof all_new_heros); // typeof all_new_heroes is an OBJECT.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // Flat returns a new array in which all sub-array are being concatenated, where INFINITY parameter is of depth.
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // Returns a boolen to check. 
console.log(Array.from("Hitesh")) // Creates an array of string, in this case "Hitesh"
console.log(Array.from({name: "hitesh"})) // interesting cause it will return an empty Array because it's not defined of what parameter you wanna make the array of from key value pair.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));