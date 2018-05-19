const {ObjectID} = require('mongodb');
var {mongoose} = require('./../server/db/mongoose');
// var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

var id = '5aff2cd12f70e33aa403cf56';

if (!ObjectID.isValid(id)) {
  console.log('ID is not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   console.log('Todo by id',todo);
// }).catch((e) => console.log(e));
User.findById(id).then((user) => {
  if (!user) {
    return console.log('unable to find user');
  }
  console.log(JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e));
