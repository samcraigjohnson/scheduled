var mongoose = require('mongoose')
var Schema = mongoose.Schema

var studentSchema = new Schema({
  f_name: String,
  l_name: String,
  s_id: Number,
  year: Number
});

module.exports = mongoose.model('Student', studentSchema);
