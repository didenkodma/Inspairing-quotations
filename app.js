const express = require('express');
const app = express();
const quotes = require('quotesy');



app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
   console.log('Server is listening on port 3000.');
});