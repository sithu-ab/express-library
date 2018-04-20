var async = require('async');
var models = require('../models');

exports.index = function(req, res) {
  async.parallel({
    bookCount: function(callback) {
      models.Book.count().then(count => {
        callback(null, count);
      });
    },
    authorCount: function(callback) {
      models.Author.count().then(count => {
        callback(null, count);
      });
    }
  }, function(err, results) {
    res.render('index', { title: 'Local Library', error: err, data: results });
  });
};

// Display list of all books.
exports.bookList = function(req, res) {
  res.send('NOT IMPLEMENTED: Book list');
};

// Display detail page for a specific book.
exports.bookDetail = function(req, res) {
  res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form on GET.
exports.bookCreateGet = function(req, res) {
  res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.bookCreatePost = function(req, res) {
  res.send('NOT IMPLEMENTED: Book create POST');
};
