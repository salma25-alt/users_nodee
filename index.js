const cors = require("cors");

require('dotenv').config()

const express = require('express')
app.use(cors());
const app = express()

const connectDB = require('./connect/db')
connectDB()


app.use(express.json())

app.use((req, res, next) => {
    console.log(`📡 INDEX.JS ALIVE: Received a ${req.method} request to ${req.url}`);
    next();
});


app.get('/', (req, res) => {
    res.send('welcom to our tryel guyss')
})

app.get('/about', (req, res) => {
    res.send('its nothing important just trying node.js again')
})



const peopleRout = require('./routes/peopleRout')

app.use('/persons', peopleRout)


// app.listen(3000, () => {
//     console.log("server is running")
// })


app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
    console.log("🚀 Server is wide awake and listening on port 3000!")
})