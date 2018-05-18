const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');
  const mydb = db.db('TodoApp');

  mydb.collection('Users').findOneAndUpdate({_id: new ObjectID('5afe901660f04519744347a2')},
    {
      $set:{
        name: 'Alisher'
      },
      $inc:{
        age: 1
      }
    },{
      returnOriginal: false
    }).then((result) => {
    console.log(result);
  });

  // db.close();
});
