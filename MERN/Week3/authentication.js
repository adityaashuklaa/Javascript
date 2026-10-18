// JWT Authentication
import express from "express"
import jwt from "jsonwebtoken"
const jwtPassword = "12345"

const app = express()
const PORT = 3000
app.use(express.json())
const ALL_USERS = [
    {
        username: "aditya@gmail.com",
        password: "753",
        name: "Aditya Shukla"
    },
    {
        username: "parul@gmail.com",
        password: "279",
        name: "Parul Verma"
    },
    {
        username: "priyanshu@gmail.com",
        password: "123",
        name: "Priyanshu Pandey"
    }
]

function userExists(username, password) {
    return ALL_USERS.some(function (user) {
        return user.username === username && user.password === password;
    });
}

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist in our in memory db."
        })
    }

    let token = jwt.sign({ username: username }, jwtPassword)
    return res.json({
        token
    })
})

app.listen(PORT, () => {
    console.log(`app is listening to ${PORT}`);
})