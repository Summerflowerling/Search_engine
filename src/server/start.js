const app = require('./server.js')
const port = process.env.PORT || 8086
const word = "running on"
const url ="https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch="
app.listen(port, listening)

function listening(){
    console.log(word+port)
}
