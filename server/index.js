const bodyParser = require('body-parser');
const express = require('express');
const logger = require('winston');
const mongoose = require('mongoose');
const router = require('./router.js');

const app = express();
mongoose.connect('mongodb://localhost/contacts');

const db = mongoose.connection;
db.on('error', (e) => logger.error('connection error:', e));
db.once('open', () => {
  // we're connected!
  logger.info('connected to database');
});

// serve static files
app.use(express.static(__dirname + '/dist'));

// parse body 
app.use(bodyParser.json());

// serve routes
app.use(router);

app.listen(3000, () => logger.info('App running on port 3000 o//'));
