var express = require('express');
var app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/hello', function (req, res) {
  res.send('Hello World from Service 2!');
});

app.get('/hello-json', function (req, res) {
  res.send({ hello: 'world' });
});