const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
const { signup } = require("./controller")

const app = express();

const PORT = process.env.PORT

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch(err) {
        console.log("MongoDB connection failed");
    }
}

app.use(express.json());


app.get('/', (req,res) => {
    try {
        res.send("Hello world")
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

app.post('/signup', signup)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server running on http://localhost:${PORT}`);
})

