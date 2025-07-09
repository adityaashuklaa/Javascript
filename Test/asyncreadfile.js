// function findSum(n){
//     let ans = 0; 
//     for(let i=0; i<n; i++){
//         ans += i;
//     }
//     return ans;
// }

// function findSumTill100(){
//     console.log(findSum(100));
// }

// setTimeout(findSumTill100, 1000)
// console.log("I will toh for sure execute.");


const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function(err, data){
//     data = data + "aditya from async";
//     fs.writeFile("a.txt");
//     console.log(data);
//     console.log(err);

// });

fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(err);
    console.log(data);
})   

fs.readFileSync("a.txt", "utf-8", function(err, data) { // This method is called when the user want to read the file synchonorously.
    console.log(err);
    console.log(data);
})

console.log("done");


function adityaReadFile() {
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", function(err, data) { // Error 1st Callback! Suppose if the file is not present, the error will be shown liek ENOENT. ENOENT is a status code for file not being present.
            resolve(data);
        })  
    })
}

function onDone(data) {
    console.log(data);   
}

adityaReadFile().then(onDone);

// When promise is being used there are no such callbacks, use of callbacks are eliminated as promises are the syntactical sugar being provided by JavaScript, which resolves the issue of CALLBACK HELL.

// Javascript dont let you to read file, the browser don't allow this thing where as node.js provides you this functionality of read file.
