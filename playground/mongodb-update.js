// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate(
  //   { _id: new ObjectID('5bfccd8f5dc6465667fba5b5') },
  //   {
  //     $set:
  //     {
  //       completed: true
  //     }
  //   },
  //   { returnOriginal: false }).then((result) => { console.log(result); });
  db.collection('Users').findOneAndUpdate(
    { _id: new ObjectID('5bf7f04c15320f3aa78330f0') },
    {
      $set:
      {
        name: "Mangu"
      },
      $inc:
      {
        age: 2
      }
    },
    { returnOriginal: false }).then((result) => { console.log(result); });
  // db.close();
});
