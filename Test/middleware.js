const express = require("express");

const app = express();

// function isOldEnough(age){
//     if(age >= 14){
//         return true;
//     }else {
//         return false;
//     }
// }

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if(age >= 14){
        next(); // middleware functionality. 
    }else{
        res.json({
            msg: "Sorry you are not the age yet.", 
        })  
    }
}

app.use(isOldEnoughMiddleware)

app.get("/ride1", function(req, res){
    res.json({
                    msg: "You have successfully riden ride 2.",
                });
});

// app.get("/ride2", function(req, res){
//     if(isOldEnough(req.query.age)) { // ride1?age=30 query parameter is ?parameter
//         res.json({
//             msg: "You have successfully riden the first ride"
//         })
//     }
//     else{
//         res.status(411).json({
//             msg: "Sorry you're not of age yet."
//         })
//     }
// })
// This is core javascript(express) way of checking, the power of middlewares is not being completely utilized yet. 


// Error Handling Middlewares (Always being used in the last of the code)
app.use(function(err, req, res, next) {
    res.status(404).send({})   
    errorCount = errorCount + 1;
})
app.listen(3000);