const http = require('http');
const server = http.createServer((req,res) => {
    if (req.url == '/'){
        res.end(`<h1>welcome to the home page</h1>
            <a href='/about'>about me</a>`)
    }
    if(req.url =='/about'){
        res.end(`<h1>my name is abhinav mishra</h1> 
            <a href='/'>back home</a>`)
    }
})

server.listen(5000);
