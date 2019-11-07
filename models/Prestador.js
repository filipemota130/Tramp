// Coin.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Presta = new Schema({
  nome: {
    type: String
  },
  cpf: {
     type: String,
     required: [true],
  },
  telefone:{
    type: String
  },
  email:{
    type: String
  },
  categoria:{
    type: String
  }
},{
    collection: 'prestador'
});

module.exports = mongoose.model('Prestador', Presta);