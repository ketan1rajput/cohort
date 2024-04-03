const express = require('express')
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const directoryPath = 'C:\Users\ketansingh'

app.get('/checkFileDirectory', (req, res) => {
    fs.readdirSync(directoryPath, (err, file) => {
        if(err){
            console.error("there is some error");
            res.send(500).send('error reading directory');
            return;
        }
        res.send(file)
    })
    });

app.listen(PORT, ()=> {
    console.log(`Server Running on ${PORT}`);
})