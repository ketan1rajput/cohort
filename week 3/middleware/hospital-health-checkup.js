const express = require('express');
const app = express();

app.get('/health-checkup', (req, res) => {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != 'Ketan' && password != "Ketan"){
        res.status(403).json({
            msg : "User doesn't exists",
        })
        return;
    }

    if(kidneyId != '1' && kidneyId != '2') {
        res.status(411).json({
            msg: "wrong inputs",
        })
        return;
    }

    res.send("hie bhai ap hospital ke andar ho");
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})