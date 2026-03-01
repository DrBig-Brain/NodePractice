const {readFile,writeFile} = require('fs');

readFile('./content/first.txt','utf-8',(err, result) => {
    if (err){
        console.log(err);
        return ;
    }
    const first = result;
    console.log(first);
    readFile('./content/second.txt','utf-8',(err, result) => {
        if (err){
            console.log(err);
            return;
        }
        const second = result;
        console.log(second);
        writeFile('./content/resutl-async.txt',`here is the result:${first},${second}`,(err)=> {
            if (err){
                console.log(err)
            }
        });
    })
} ) 
