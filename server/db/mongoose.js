var mongoose = require('mongoose');

// Tell mongoose to use the built-in promise library
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {mongoose};