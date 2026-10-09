// Basic Express
// Creating an http server.

import express from "express"

const app = express()

app.use(express.json());

let users = [
    {
        name: "Aditya Shukla",
        kidneys: [
            {
                healthy: true
            },
            {
                healthy: true
            }
        ]
    }
]


// function sum(n){
//     let ans = 0;
//     for(let i = 1; i<=n; i++){
//         ans = ans + i;
//     }
//     return ans;
// }

// app.get("/", function(req, res) {
//     const n = req.query.n;
//     const ans = sum(n)
//     res.status(201).send("hi your answer is " + ans)
// })

// Query params is usually good for get method request.
app.get("/", function(req, res) {
    const Kidneys = users[0].kidneys;
    const numberOfKidneys = Kidneys.length;
    const numberOfHealthyKidneys = Kidneys.filter(k => k.healthy).length;
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

// Sending data in body is the norm for a post request.

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res) {
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true
    }
    res.json({}) // without the res.json, the request will be hunged.
})

app.listen(3000, () => {
    console.log(`app is listening to port: 3000`);
})