const express = require('express')
const app = express()
const port = 3000

// app.listen(port)
// app.use(express.json())

// app.get('/', function(req, res) {
//     // throw new Error("Margyeee") // Syntax for throwing purposefully error
// })

var users = [{
    name: "Aditya",
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json())   
 
app.get('/', function(req, res) {
    const adityaKidneys = users[0].kidneys
    const numberOfKidneys = adityaKidneys.length
    let numberOfHealthyKidneys = 0
    for(let i = 0; i<adityaKidneys.length; i++){
        if(adityaKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        adityaKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post('/', function(req, res) {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})
 
app.put('/', function(req, res) {
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

app.delete('/', function(req, res) {

    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
        for(let i= 0; i<users[0].kidneys.length; i++){
            if (users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys
        res.json({
            msg: "Done."
        })
    }else {
        res.status(411).json({
            msg: "You have no bad Kidneys"
        })
    }
})

app.get('/files/:filename', function(req, res) {
    const name = req.params.fileName; 
    console.log(name);
    res.send("If there's /:filename after the route, it will get everything written after that route.")
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for(let i= 0; i<users[0].kidneys.length; i++){
        if (!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen(port)
