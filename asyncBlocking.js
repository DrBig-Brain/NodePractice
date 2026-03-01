const http = require('http')

const server = http.createServer((req,res) =>{
    if(req.url==='/'){
        res.end(`<h1>Home Page</h1> 
            <a href='/about'>about</a>`)
    }
    if(req.url==="/about"){
        for(let i = 0; i<100000000;i++){
            console.log(i)
        }
        res.end(`<h1>About Page</h1>
            <a href='/'>home</a>`)
    }
    //res.end("url doesn't exist")

})

server.listen(5000,()=>{
    console.log('server is listening on port 5000')
})