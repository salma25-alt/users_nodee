const mongoose = require("mongoose");

const mongoURL = 'mongodb://localhost:27017/users'

async function connectDB() {
    try {
        await mongoose.connect(mongoURL)
        console.log("connected to mongoDB successfully")
        
    } catch (error) {
        console.log('could not connect to mongoDB')
        
    }
}

module.exports = connectDB;

