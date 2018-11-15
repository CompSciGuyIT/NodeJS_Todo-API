const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // Delete many
    // db.collection('Users').deleteMany({name: 'Gary'}).then((result) => {
    //     console.log(result);
    // });

    // Delete one
    // db.collection('Users').deleteOne({
    //     _id: new ObjectID('5becec99992b2c082f3e9410')
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    // Find one and delete
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5bed27663f15891b18ead75c')
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // client.close();
});