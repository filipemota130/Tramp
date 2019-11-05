const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String
  },
  price: {
     type: Number
  }
},{
    collection: 'Cliente'
});

module.exports = mongoose.model('User', User);