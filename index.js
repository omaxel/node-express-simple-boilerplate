const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

app.get('/', (req, res) => {
  const {param1} = req.query;

  res.send('Hello World!<br>Param1 = ' + param1);
});

let nexPersonId = 3;
const people = [
  {id: 1, name: 'John', surname: 'Doe'},
  {id: 2, name: 'Anna', surname: 'Dopey'},
];

app.get('/people', (req, res) => {
  res.send(people);
});

app.get('/people/:id', (req, res) => {
  const personId = +req.params.id;

  const person = people.find(person => person.id === personId);

  if(!person) {
    res.sendStatus(404);
    return;
  }

  res.send(person);
});

app.post('/people', (req, res) => {
  if(!req.body){
    res.status(400).json({ error: 'Body not specified' });
    return;
  }

  if(!req.body.name){
    res.status(400).json({ error: 'No name specified' });
    return;
  }

  if(!req.body.surname){
    res.status(400).json({ error: 'No surname specified' });
    return;
  }

  const newPerson = {
    ...req.body,
    id: nexPersonId++
  };

  people.push(newPerson);

  res.send(newPerson);
});