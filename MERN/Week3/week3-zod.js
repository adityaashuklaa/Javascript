const express = require("express")
const zod = require("zod")
const app = express()
const port = 3000

// const schema = zod.array(zod.number())
const schema = zod.object({
    email : zod.string(),
    password : z.string(),
    country : z.literal("IN").or(z.literal("US")), // Literal means literally it should be IN. 
    kidneys : z.array(z.number())
})


app.use(express.json())

app.post('/kidney-health', function(req, res) {
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg: "Input is Invalid"
        })
    } else {
        res.send({  
            response
        })
    }
})


app.listen(port, () => {
    console.log(`Your code is live on the port ${port}`);    
})

/*
$ Operations can also be used in zod, like or and and.
*/