/*const {readFile} = require('fs');

console.log('stared the first Task');

readFile('./content/first.txt','utf-8',(err, result)=>{
    if(err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log('completed first task')
})

console.log('starting next task')*/

const http = require('http')

const server = http.createServer((req,res) => {
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000, () => {
    console.log('server is listening to port 5000')
})