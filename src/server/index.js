const dotenv = require('dotenv');
dotenv.config();

const  https = require('https');

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
 console.log(`Your api key is: ${apiKey}`)

// app.get('/', function (req, res) {
//     // res.sendFile('dist/index.html')
//     return hello
//     console.log(apiKey)
//     res.sendFile(path.resolve('src/client/views/index.html'))
//     res.send(apiKey)
// })

// designates what port the app will listen to for incoming requests


app.get('/submit', function (req, res) {
    const formText = req.query.content
    //https is an alternative to fetch(), fetch() can't be used in node
    https.get(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&txt=${formText}&model=general&lang=en`,(resp) => {
        let data = '';
      
        // A chunk of data has been received.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          res.send(data);
        });
      
      }).on("error", (err) => {
        res.send(err.message)
      });
      
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})