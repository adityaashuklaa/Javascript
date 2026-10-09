// Basic Express
// Creating an http server.

import express from "express"

const app = express()

app.get("/", function(req, res) {
    res.send("hi there.")
})

app.listen(3000, () => {
    console.log(`app is listening to port: 3000`);
})