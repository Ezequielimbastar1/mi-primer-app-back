const http = require("http")

console.log({ http })

function requestcontroler () {
    //logica de nuestra función
    console.log("hola mundo!!!!" )
}

const server = http.createServer(requestcontroler)

server.listen(4000)