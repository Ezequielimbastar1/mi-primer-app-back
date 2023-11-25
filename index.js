const http = require("http")
const another = require('./another.js')

function requestcontroler () {
    //logica de nuestra función
    console.log("hola mundo!!!!" )
}

const server = http.createServer(requestcontroler)

server.listen(4000)