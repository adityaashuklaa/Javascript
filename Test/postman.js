// const express = require('express')
// const app = express()
// const port = 3000

// app.use(express.json())

// app.post('/conversations', (req, res) => {
//     // console.log(req.headers["authorization"])
//     console.log(req.body) // Express does not parse request bodies by default. You need to use body-parsing middleware.
//     res.send('<em>Aditya is here!!!</em>')
// })

// app.listen(port, () => {
//     console.log(`Example app is listening on port ${port}`);    
// })


// Starting with the exposing of your code to the word

const express = require('express')
const app = express()
const port = 3000

function sum(n) {
    let ans = 0;
    for(let i=0; i<=n; i++){
        ans = ans + i;
    }
    return ans
}

app.get('/', function(req, res) {
    const n = req.query.n   
    const ans = sum(n)
    res.send("Hi there, your ans is " + ans)
})

app.listen(port, () => {
    console.log(`The doctor is ready to listen in the room no. ${port}`);
})