const score = 400
// console.log(score); Not defined surely whether it's a number or not, it's been interpreted

const balance = new Number(100)
// console.log(balance); Surely defined that it's a number

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // Will add some zeroes after point 100.00 in this case 

const otherNumber = 123.8966

//console.log(otherNumber.toPrecision(4)); returns a string which is precised value

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); put commas acc. to system ('en-IN') for indian system

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); returns absolute value that ignores -ve sign
// console.log(Math.round(4.6)); round-offs the no.
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)