const http = require('http')
const EventEmitter = require('events')

const server = http.createServer()

server.on('request',(req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(`<h1 style="color:pink">Welcome</h1>`)
})
server.listen(5000)