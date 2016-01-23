const Contact = require('../models/contact.js');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

module.exports = function(router) {
  router.post('/upload', multipartMiddleware, (req, res) => {
    req.body.forEach((data) => {
      const contact = new Contact(data);
      contact.save(function(err, doc) {
        if (err) { return next(err); }
      });
    });
    return res.json({ message: 'contact uploaded with success!' });
  });
};
