const {readFile} = require('fs');

const getText = (path) =>{
    return new Promise ((resolve,reject) => {
        readFile(path,'utf-8',(err,res)=>{   
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}

const start = async()=>{
    const first = await getText('./content/first.txt')
    console.log(first)
}

start();