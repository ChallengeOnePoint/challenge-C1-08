const addressBook = require('./data/addressBook.json');
const Contact = require('./models/contact.js');
const logger = require('winston');

module.exports = function initDatabase() {
  logger.info('init database');
  Contact.remove({}, () => {
    addressBook.forEach((address) => {
      const contact = new Contact(address);
      contact.save((err, doc) => {
        if (err) { logger.error(err); }
      });
    });
  });
}
