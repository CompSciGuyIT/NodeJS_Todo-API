const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove(_id, '5c095e52fe043e9627534c50').then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndRemove('5c095e52fe043e9627534c50').then((todo) => {
    console.log(todo);
});
