const express = require("express")
const app = express()
const port = 3333

app.listen(port, showPort)
function showPort() {
    console.log("Server created and running on port", port)
}