const fs = require('fs');

function readFileOperation(filename) {
    fs.readFile(filename,'utf-8',(err,data)=>{
        if(err){
            console.log("this is a very big error")
        }
        console.log(data);
    })

    setTimeout(()=>{
        console.log("This is a expensive function");
    },2000)
}
const filename = 'example.txt';
readFileOperation(filename);