
let projectData ={}
var path = require('path')

/*.env and api keys*/
const dotenv = require('dotenv');
dotenv.config();


const express = require('express')
const app = express() 
const fetch = require ('node-fetch')
app.use(express.static('dist'))



const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors")
app.use(cors())



app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/view/index.html'))
})



 app.get('/getInput/:searchTerm', async function(req,res){
    const userInput = req.params.searchTerm
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&generator=search&inprop=url&gsrsearch=${userInput}&gsrprop=snippet`
    
    const data = await fetch (url)

    try{
        const json = await data.json()
        projectData = json
        res.send(projectData)
        console.log("Json Data got", json)
        
    }
    catch(error){
        console.log("You got error:",error)
    }
    
 


})


module.exports = app

