const express = require('express')
const app = express()

const connectDB = require('./connect/db')
connectDB()


app.use(express.json())


app.get('/', (req, res) => {
    res.send('welcom to our tryel guyss')
})

app.get('/about', (req, res) => {
    res.send('its nothing important just trying node.js again')
})



const peopleRout = require('./routes/peopleRout')

app.use('/persons', peopleRout)


app.listen(3000, () => {
    console.log("server is running")
})