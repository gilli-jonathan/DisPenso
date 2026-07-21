const express = require("express")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Server Attivo!!!")
})

app.listen(3000, () => {
    console.log("Server attivo su porta: 3000");
})