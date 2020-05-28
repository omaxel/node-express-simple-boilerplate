const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello-json', (req, res) => {
  res.send({ hello: 'world' });
});