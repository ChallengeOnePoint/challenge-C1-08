const express = require('express');
const logger = require('winston');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/contacts');

const addressBook = require('./data/addressBook.json');

const db = mongoose.connection;
db.on('error', (e) => logger.error('connection error:', e));
db.once('open', () => {
  // we're connected!
  logger.info('connected to database');
});

app.use(express.static(__dirname + '/dist'));

app.get('/contacts', (req, res) => {
  res.json(addressBook);
});

app.listen(3000, () => logger.info('App running on port 3000 o//'));
