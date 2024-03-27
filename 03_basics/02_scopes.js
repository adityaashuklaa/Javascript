//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c); //This will print var c = 300, which is the problem of var (scope).

// Global scope is different in browser as compared to node.


// Closure (It's a property in which nested function can have access of the global/parent decalred function)
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //it will give an error and not let two() execute. 

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); error
}

// console.log(username); error


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){ // Variable is not been declared here. 
    return num + 1
}



addTwo(5) // It is been accessed before declaration of variable therefore will throw an error, known as HOISTING. 
const addTwo = function(num){
    return num + 2
}
