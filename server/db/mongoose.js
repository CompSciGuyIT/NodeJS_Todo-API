var mongoose = require('mongoose');

// Tell mongoose to use the built-in promise library
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

module.exports = {mongoose};