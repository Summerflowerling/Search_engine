const app = require('./server.js')
const port = 8086
app.listen(port, listening)

function listening(){
    console.log(`Running on port ${port}`)
}
