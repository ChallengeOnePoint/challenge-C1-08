var express = require('express');
var router = express.Router();

require('./routes/contact.js')(router);
require('./routes/upload.js')(router);

module.exports = router;
