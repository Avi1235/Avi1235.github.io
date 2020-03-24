var express = require('express');
app = express();


server.listen(4000);
app.use(express.static('public'));  

console.log("listening on port 4000");