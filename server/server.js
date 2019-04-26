require('dotenv').config();
const express = require('express');
const axios = require('axios');
const session = require('express-session');
const massive = require('massive');

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

const app = express();
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUnitialized: false
}));

app.use(express.json());

massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);

});

app.listen(SERVER_PORT, () => {
  console.log('I see dead people on port: ', SERVER_PORT);
});