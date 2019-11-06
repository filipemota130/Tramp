const mongoose = require('mongoose')
0
mongoose.connect('mongodb:/localhost/testeocal')
//mongoose.Promise = global.Promise

module.exports = mongoose;