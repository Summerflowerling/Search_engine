

/*Api URL*/
const url ="https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch="
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
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/view/index.html'))
})



 app.get('/getData', async function(req,res){
   
    const userInput = document.getElementById("searchTerm").value
    const data = await fetch (url+userInput)

    try{
        const json = await data.json()
        res.send(json)
        console.log("Json Data got", json)

    }
    catch(error){
        console.log("You got error:",error)
    }
    
 


})


module.exports = app

/*NOTE: replace the api key with stored variable will crush, need help to debug */

/*
app.post("/getGeoname", async function(req,res){
   
    const API_URL = `http://api.geonames.org/searchJSON?q=${req.body.location}&maxRows=1&username=iku124` 

    const myPromise = await fetch(API_URL); 
    
    try{
        const myData = await myPromise.json();  
        let lng = myData.geonames[0].lng
        let lat = myData.geonames[0].lat
        
        const weatherbit = await fetch (weatherBitUrl+`lat=${lat}&lon=${lng}&days=7&key=25236c54b21347c5acba0d34020a5c84`)
       
        try{
            const weatherbitPromise = await weatherbit.json()
            console.log(weatherbitPromise)
            const pixabay = await fetch(`https://pixabay.com/api/?key=4772361-58a041a9c4a31b16cbe90fbc1&q=${req.body.location}&image_type=photo&editors_choice=true&category=travel`)

            try{
                const pixabayPrimose = await pixabay.json()
                console.log(pixabayPrimose.hits[0])
                res.send([weatherbitPromise,pixabayPrimose.hits[0].largeImageURL])

            } catch(error){
                res.send([weatherbitPromise, "img/backup.png"]) 
                console.log("Something wrong when fetching the photo",error)
            }

            
        } 
        catch(err){
            console.log("Error in the second fetch",err)
        }
       
    }
       
    catch(error){
        alert("Make sure you enter a country or city name")
        return;
    }

})

*/


