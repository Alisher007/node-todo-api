const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');
  const mydb = db.db('TodoApp');


  mydb.collection('Todos').insertOne({
    text: 'Eat lunch',
    completed: false
  },(err,result) => {
    if (err) {
      return console.log('Unable to insert todo',err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // mydb.collection('Users').insertOne({
  //   name: 'Andrew',
  //   age: 25,
  //   location: 'Philadelphia'
  // },(err,result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo',err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });


  db.close();
});
