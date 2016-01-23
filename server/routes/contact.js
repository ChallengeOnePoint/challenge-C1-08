const addressBook = require('../data/addressBook.json');
const Contact = require('../models/contact.js');

module.exports = function(router) {
  router.get('/contacts', (req, res) => {
    res.json(addressBook);
  });
};
