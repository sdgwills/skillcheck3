require('dotenv').config();
const express = require('express');
const axios = require('axios');
const session = require('express-session');
const massive = require('massive');
const ctrl = require('./controllers/controller');

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

const app = express();
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(express.json());


app.get('/api/houses', ctrl.read);
app.post('/api/house', ctrl.create);
app.delete('/api/house/:id', ctrl.delete);


massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
});

app.listen(SERVER_PORT, () => {
  console.log('I see dead people on port: ', SERVER_PORT);
});