const mongoose = require('mongoose');

const Contact = mongoose.model('Contact', {
  number: String,
  street: String,
  city: String,
  postcode: String,
  firstname: String,
  lastname: String,
});

module.exports = Contact;
