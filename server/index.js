const express = require('express');
const logger = require('winston');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/contacts');

const db = mongoose.connection;
db.on('error', (e) => logger.error('connection error:', e));
db.once('open', () => {
  // we're connected!
  logger.info('connected to database');
});

app.use(express.static(__dirname + '/dist'));

app.get('/info', (req, res) => {
  res.json({
    viewSystem: 'React',
    architecture: 'Redux',
  });
});

app.listen(3000, () => logger.info('App running on port 3000 o//'));
