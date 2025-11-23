const express = require("express")
const connectDB = require('./config/database')
const app = express();
const Habit = require("./models/habits");
const { default: mongoose } = require("mongoose");
app.use(express.json());

const userId = new mongoose.Types.ObjectId()
console.log(userId)

app.post("/hello", async (req, res) => {

    try {
        const { title, description, frequency } = req.body

        const newHabit = Habit({
            userId,
            title,
            description,
            frequency
        })



        const response = await newHabit.save()
        console.log(response)
        res.send("Habit created successfully")

    } catch (err) {
        console.log(err)
        res.status(400).send("Error saving the user" + err.message)
    }

})


// app.post("/hello", (req, res) => {
//     res.send("Hello")
// })

// app.post("/hello", (req, res) => {
//     res.send("Hello")
// })

// app.post("/hello", (req, res) => {
//     res.send("Hello")
// })

connectDB().then(() => {
    console.log("DB connected")
})

app.listen("5002")