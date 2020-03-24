const express = require('express');
app = express();
server = require('http').createServer(app);

const data = require("./servicios.json");


server.listen(4000);

app.get("/json", (req,res)=>{
    // Send a JSON response with the data from template.json
    res.json( data );
})

console.log("listening on port 4000");