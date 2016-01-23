const express = require('express');
const logger = require('winston');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/info', (req, res) => {
  res.json({
    viewSystem: 'React',
    architecture: 'Redux',
  });
});

app.listen(3000, () => logger.info('App running on port 3000 o//'));
