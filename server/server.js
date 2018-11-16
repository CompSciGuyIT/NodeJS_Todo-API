var mongoose = require('mongoose');

// Tell mongoose to use the built-in promise library
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }, 
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

// var newTodo = new Todo({
//     text: 'Drink beer',
//     completed: false,
//     completedAt: null
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

var newUser = new User({
    email: 'gary@me.com'
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save user', e);
});