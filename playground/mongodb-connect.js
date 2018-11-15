const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    db.collection('Users').insertOne({
        name: 'Barrett',
        age: 48,
        location: 'Melbourne'
    }, err => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
    });

    client.close();
});