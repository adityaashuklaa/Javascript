console.log("at the top 1");

function promisifiedTimeout(){
    console.log("function called 3");
    
    return new Promise(function (resolve) {
        console.log("inside promise callback 4");
        
        setTimeout(function (){
            console.log("setTimout 5");
            
            resolve("done babyy!! I'm burnt out.")
        }, 5000)
    })
}

console.log("in the midde 2");

promisifiedTimeout().then(function (value) {
    console.log("promisified then 6 ");
    
    console.log(value);
})