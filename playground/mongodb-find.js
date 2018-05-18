const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');
  const mydb = db.db('TodoApp')


  mydb.collection('Users').find({
    name: 'Andrew'
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err) => {
    console.log('unable to fetch todos',err);
  });

  mydb.collection('Users').find({name: 'Andrew'}).count().then((count) => {
    console.log(`Users count: ${count}`);
  },(err) => {
    console.log('unable to fetch todos',err);
  });


  // db.close();
});
