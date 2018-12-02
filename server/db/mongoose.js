var mongoose = require('mongoose');

// Tell mongoose to use the built-in promise library
mongoose.Promise = global.Promise;

let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://<dbuser>:<dbpassword>@ds123584.mlab.com:23584/tranquil-brushlands-32286'
};

mongoose.connect(db.localhost || db.mlab, { useNewUrlParser: true });

module.exports = {mongoose};