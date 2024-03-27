// Dates (it's a moment which is defined and taken reference from 1 jan 1970)

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString()); Good Method
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2023, 0, 23) Months starts from 0 [0 indexing]
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") Format to declare any date
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //Current time

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); /1000 coverts date of milisecs to secs.

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1); for normal people +1 so that end user doesn't gets confused
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
}) // used for customizing date acc. to your client needs.

