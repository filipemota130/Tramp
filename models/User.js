const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    required: [true,"email necessário"]
  },
  senha:{
     type: String
  }
},
{
    collection: 'Cliente'
});

const usuario = mongoose.model("User", User);

module.exports = usuario;