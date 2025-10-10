const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded(({extended: true})));
app.use(express.json())

let convert;

app.post("/convert", (req,res) =>{
    const type = req.body.type
    const amount = req.body.amount

    if (type == "USD") {
        return res.json(parseFloat(amount) * 32.07)
    }
    else{
        return res.json(parseFloat(amount) / 32.07)
    }
})
app.listen(4004, () => {
    console.log("Listening on port http://localhost:4004");
})
