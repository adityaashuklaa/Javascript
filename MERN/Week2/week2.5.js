// Basic Express
// Creating an http server.

import express from "express"

const app = express()

function sum(n){
    let ans = 0;
    for(let i = 1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}

app.get("/", function(req, res) {
    const n = req.query.n;
    const ans = sum(n)
    res.status(201).send("hi your answer is " + ans)
})

app.listen(3000, () => {
    console.log(`app is listening to port: 3000`);
})