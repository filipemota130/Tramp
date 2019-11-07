const mongoose = require('mongoose')
0
mongoose.connect('mongodb:/localhost/testeocal')
//mongoose.Promise = global.Promise

module.exports = mongoose;

var Mongoose = require('Mongoose');

var db = Mongoose.connection;

db.on('error', console.error);
db.once('open', function() {

  console.log('Conectado ao MongoDB.')
  const Schema = mongoose.Schema;

  const User = new Schema({
    email: {
      type: String,
      required: [true,"email necessário"]
    },
    senha: {
       type: String
    }
  },{
      collection: 'Cliente'
  });
  
  const usuario = Mongoose.model("User", User);
  
  module.exports = usuario;
});

Mongoose.connect('mongodb://localhost/test');