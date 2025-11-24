const express = require("express")
const connectDB = require('./config/database')
const app = express();
const Habit = require("./models/habits");
const { default: mongoose } = require("mongoose");
const env = require('dotenv')
app.use(express.json());
env.config()

const userId = new mongoose.Types.ObjectId(process.env.USER_ID)

app.post("/habits", async (req, res) => {

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
        res.status(201).send(response)

    } catch (err) {
        console.log(err)
        res.status(400).send("Error saving the habit" + err.message)
    }

})

app.get("/habits", (req, res) => {
    const data = Habit.findById(userId)
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

connectDB(process.env.MONGODB_URI).then(() => {
    console.log("DB connected")
})

app.listen("5002")