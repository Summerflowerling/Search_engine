
let projectData = {}
var path = require('path')
const dotenv = require('dotenv');
const express = require('express')
const app = express()
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const cors = require("cors")

app.use(cors())
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/view/index.html'))
})

// set up GET router
app.get('/getInput/:searchTerm', async function(req, res) {
    const userInput = req.params.searchTerm
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&generator=search&inprop=url&gsrsearch=${userInput}&gsrprop=snippet`
    const data = await fetch(url)

    try {
        const json = await data.json()
        projectData = json
        res.send(projectData)
        console.log("Json Data got", json)
    } catch (error) {
        console.log("You got error:", error)
    }

})

module.exports = app