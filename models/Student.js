var mongoose = require('mongoose')
var Schema = mongoose.Schema

var studentSchema = new Schema({
  _school: {type: Number, ref: 'School'},
  f_name: String,
  l_name: String,
  year: Number
});

module.exports = mongoose.model('Student', studentSchema);
