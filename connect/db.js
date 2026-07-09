require('dotenv').config()
const mongoose = require("mongoose");

const mongoURL = process.env.onlineMongUrl;

async function connectDB() {
    try {
        await mongoose.connect(mongoURL);
        console.log("connected to mongoDB successfully");
    } catch (error) {
        console.log('could not connect to mongoDB');
        console.error(error);
    }
}

module.exports = connectDB;