const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');
  const mydb = db.db('TodoApp');

  //deleteMany
  // mydb.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // mydb.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // mydb.collection('Users').findOneAndDelete({_id: new ObjectID('5afe905f9a8d6b3648f9b20b')}).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});
