const express = require("express");
const zod = require("zod");
const app = express();
const PORT = 3000; 

const schema = zod.array(zod.number());

//this will extract the body
app.use(express.json());

app.post("/health-checkup", function (req, res){
    // sample kidneys data = [1,2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success) {
        res.status(411).json({
            msg:"input is invalid"
        })
    }

    res.send({ 
        response
    })
});
 

app.listen(3000, () => {
    console.log(`Server is running on ${PORT}`);
});