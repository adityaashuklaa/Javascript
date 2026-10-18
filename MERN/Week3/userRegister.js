import express from "express";
import mongoose from "mongoose";

const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://adityaa_shukla:adityamongo@cluster0.mmhve.mongodb.net/user_register")

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

// app.post("/signup", async function(req, res){
//     const username = req.body.username;
//     const password = req.body.password;
//     const name = req.body.name;

//     const existingUser = await User.findOne({ email: username })
//     if(existingUser) return res.status(400).send("User already exists")

//     const user = new User({
//         name: name,
//         email: username,
//         password: password
//     })

//     user.save();
//     res.json({
//         "msg": "User Created Successfully!!"
//     })
// })

app.post("/signup", async function (req, res) {
  try {
    const { username, password, name } = req.body;

    const existingUser = await User.findOne({ email: username });
    if (existingUser) return res.status(400).send("User already exists");

    await User.create({ name, email: username, password });

    res.json({ msg: "User Created Successfully!!" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(3000, () => {
    console.log(`app is listening to 3000`);
})