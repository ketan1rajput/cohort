const express = require('express');
const app = express();
const PORT = 3000;

app.use(numberOfRequestForUserFunction);

let numberOfRequestForUser = {};
setInterval(() => {
    numberOfRequestForUser = {};
},3000);

function numberOfRequestForUserFunction(req, res, next) {
    const userId = req.headers["user-id"];

    if(numberOfRequestForUser[userId]){
        numberOfRequestForUser[userId] = numberOfRequestForUser[userId] + 1;
        if (numberOfRequestForUser[userId] > 5) {
            res.status(404).send("no entry");
        } else {
            next();
        }
    }
    else {
        numberOfRequestForUser[userId] = 1;
        next();
    }
}

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
})