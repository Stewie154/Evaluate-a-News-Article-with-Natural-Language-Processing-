const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var cors = require('cors')

const app = express()
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

//retrieve api key from .env file 
const apiKey = process.env.API_KEY
// console.log(`Your api key is:  + ${apiKey}`)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    res.send(apiKey)
})

