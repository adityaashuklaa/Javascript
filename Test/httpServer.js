// npm init -y is the command used to install package.json in your computer.
// Is is being provided by the javascript, you have to just bring the express from the browser
// npm install express is the command being used to install express.js

// const express = require("express");
// const app = express()
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send(`Custom Express Server, Handly Made`); // This cb function will run anytime someone is trying to hit to your backend server.
// })

// app.listen(port, () => {
//     console.log(`This section is being print on the ${port} port`);
// })

// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser"); // Used to access the body through the POST REQUEST. Cause express doesn't handles that. (npm install body-parser)
// const port = 3001;   


// app.use(bodyParser.json());
// app.get("/route-handler", function(req, res){
//     res.json({
//         name: "Aditya Shukla",
//         age: 21
//     })
// })

// app.get('/', (req, res) => {
//     res.send(`Server made by me is responding`);
// })

// app.listen(port, () => {
//     console.log(`This section is being print on the ${port} port`);
// })

// npm install nodemon, and npx nodemon Http2ServerRequest.js both are the command use to refresh the server on file save 
// Ports are being used to run multiple processes simlutaneously.
// Writing My custom HTTPS Server code 

const express = require("express");

const app = express();

function sum(n){
    let ans = 0;   
    for(let i= 1; i<=n; i++){
        ans = ans+i;
    }
    return ans;
}

app.get("/", function(req, res) {
    const n = req.query.n;  
    const ans = sum(n);
    // res.send("Heyy Aditya, Keep up the work. Your ans is " + ans);
    res.send(`Hey Aditya, Keep up the good work. Your ans is ${ans}`);
})

app.listen(3000); 

