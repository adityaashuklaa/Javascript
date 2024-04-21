// Immediately Invoked Function Expressions (IIFE)
// It helps in immediately executing the function. Function declaration should not be polluted by global variables. 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  //; is used to end the IIFE 

( (name) => { // This is a simple IIFE, as no name is been assigned to it.
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

//(First paranthesis is for function Defination)(Execution Call)

// To write two IIFE in a single file, then use semicolon (;) to separate both of them. 