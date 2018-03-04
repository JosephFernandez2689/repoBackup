var express = require('express');
var bodyParser = require('body-parser'); // incoming data into JSON
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));



app.listen(3000, function() {
  console.log('Read Error');
  console.log('Server started and listening on port 3000');
});
