const express = require('express');
const app = express();
const PORT = 3000;

let numberOfRequest = 0;

app.use(CountRequest);
app.use(express.json());

function CountRequest(req, res, next) {
    numberOfRequest++;
    console.log("Request count:", numberOfRequest);
    next();
}

app.get('/request-count', function (req, res) {
    res.status(200).send("Work is done");
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
