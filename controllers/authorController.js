var Book = require('../models/Author');

// Display list of all authors.
exports.authorList = function(req, res) {
  res.send('NOT IMPLEMENTED: Author list');
};

// Display detail page for a specific author.
exports.authorDetail = function(req, res) {
  res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display author create form on GET.
exports.authorCreateGet = function(req, res) {
  res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle author create on POST.
exports.authorCreatePost = function(req, res) {
  res.send('NOT IMPLEMENTED: Author create POST');
};
