// For each loop (Majorly used for arrays. Best Method)
const coding = ["js", "ruby", "java", "python", "cpp"]

// For-each loop is a high order function as it requires a Call Back Function ( Function which doesn't have any specific name) to iterate. 
// coding.forEach( function (val){
//     console.log(val);
// } )

// Second Variation of ForEach Loop. Which is ARROW FUNCTION.
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> { // For-each have many parameter than just item. like these. 
//     console.log(item, index, arr); 
// } )

// For-each Loop for Objects in Array. IMPORTANT
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

// This method helps in Database, where data is comming in objects in array format and you can easily extract values accordingly. 