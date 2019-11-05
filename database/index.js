const mongoose = require('mongoose')
0
mongoose.connect('mongodb:/localhost/noderest')
mongoose.Promise = global.Promise

module.exports = mongoose;