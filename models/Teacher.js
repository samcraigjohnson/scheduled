var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var teacherSchema = new Schema({
  f_name = String,
  l_name = String,
  email = String,
  phone_number = String,
  _school = {type: Number, ref: 'School'},
  photo_url = String,
  classes = [{type: Schema.Types.ObjectId, ref: 'Class'}]
});

module.exports = mongoose.model('Teacher', teacherSchema);
