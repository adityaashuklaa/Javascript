// Middlewares, authentication, Global Catches and Zod 
const express = require("express")
const app = express()
const port = 3000

function userMiddleware(req, res, next) {
    if(username != "Aditya" && password != "pass") {
        res.status(403).json({
            "msg" :"Incorrect Inputs"
        })
    } else {
        next()
    }
}

function KidneyMiddleware(req, res, next) {
    if(kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            "msg" : "Incorrect Inputs"
        })
    } else {
        next()
    }
}

app.get('/overall-checkup', calculateRequest ,userMiddleware, KidneyMiddleware, function(req, res) {
    res.send("Your Health is perfectly fine. ")
})

//app.use(calculateRequest) // After this i don't have to pass calculateRequest Middleware to any route handler cause it will be getting called by it's own.

app.use(express.json())

app.get('kidney-checkup', KidneyMiddleware, function(req, res) {
    res.send("Your kidney is fine")
})

app.get('/heart-checkup', function(req, res) {
    res.send("Your Heart is fine!")
})

app.get('/health-checkup', function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId  = req.query.kidneyId;

    if(username != "Aditya" || password != "pass"){
        res.status(404).json({
            "msg" : "Something is wrong with your inputs"})
            return
    }

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(404).json({
            "msg" : "Something is up with your inputs"
        })
        return
    }

    res.json({
        "msg": "Your kidney is fine, as Always!!"
    })
})

app.listen(port, () => {
    console.log(`Your code is live at the port ${port}`)
})

let numberOfRequests = 0

function calculateRequest(req, res, next) {
    numberOfRequests ++ ;
    console.log(numberOfRequests);
    next()
}


// Input Validation

app.post('/your-health', function(req, res) {
    const kidneys = req.body.kidneys
    const kidneyLength = kidneys.length

    res.send(`Your Kidney Length is ${kidneyLength}`)
})

// Global Catches

app.use(function(err, req, res, next) { // Error handling Middlewares.
    errorCount++ //This thing is done to check the number of erros being occured and alert the server with it.
    res.json({
        msg : "Sorry, Somethin is up with our server."
    })
})



/*Key Learnings
1) npm list express commands is used to check whether the express is being installed in your computer or not. If express is not present in your computer it will return -- (empty)

$ Middlewares are used to do prechecks, and ideally pre checks are of two types. 
    1) Authentication (User is loged in or not)
    2) Input is valid or not.

$ Whenever sending a get request, can send a input along. 
 ?n=3000 <= Query Parameter.(n)

$ These prechecks are getting repetative if the request methods will change, or some different requests will be asked hence violating DRY principle. That's where middlewares is being used, write all the prechecks in one place and then use it, making the code effient.

$ Middlewares are between route and the final handler which does checks.

$ Rate limiting is a part of middleware, which makes sure that the user has limits on the no. of request. 

$ Body Parser is a middleware.

$ Middleware is a generic function that doesn't know what is the next function and it doesn't care about it either, the order of execution of middlewares you define when you are creating route handlers.

$ app.use(express.json()) is a middleware used to get the post body parameter. The use of this function is, you dont have to pass the middleware in the route handlers, the code below this line automatically adds that particular middleware to the route handlers.

$ There is a global catch middleware which is used in the end of the code, for the exception and the error being occured in the code, which runs the code written inside this middleware. It takes four inputs as an argument.
$ Zod is a popular node.js library used to do Input Validation. 
*/
