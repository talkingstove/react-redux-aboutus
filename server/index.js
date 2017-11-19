const express = require('express');
const app = express();
var cors = require('cors');
var path = require('path');

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.listen(4222, function () {
  console.log('About us app listening on locahost:4222!')
});