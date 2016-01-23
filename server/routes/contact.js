const logger = require('winston');
const Contact = require('../models/contact.js');

module.exports = function(router) {
  router.get('/contacts', (req, res, next) => {
    logger.info('get contacts');
    Contact.find({}, (err, docs) => {
      if (err) { return next(err); }
      res.json(docs);
    });
  });

  router.post('/contacts', (req, res, next) => {
    logger.info('new contact', req.body);
    const contact = new Contact(req.body);
    contact.save(function(err, doc) {
      if (err) { return next(err); }
      return res.json(doc);
    });
  });

  router.get('/contacts/:id', (req, res, next) => {
    if (req.params.id) {
      logger.info('get contact', req.params.id);
      Contact.findOne({ _id: req.params.id }, (err, doc) => {
        if (err) { return next(err); }
        res.json(doc);
      });
    }
  });

  router.put('/contacts/:id', (req, res, next) => {
    if (req.params.id) {
      logger.info('put contact', req.params.id, req.body);
      Contact.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true },
        (err, doc) => {
        if (err) { return next(err); }
        res.json(doc);
      });
    }
  });

  router.delete('/contacts/:id', (req, res, next) => {
    if (req.params.id) {
      Contact.findOneAndRemove({ _id: req.params.id }, (err, cat) => {
        if (err) { return next(err); }
        res.json(cat);
      });
    }
  });
};
