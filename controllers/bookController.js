var Book = require('../models/Book');

exports.index = function(req, res) {
  res.send('NOT IMPLEMENTED: Site Home Page');
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
