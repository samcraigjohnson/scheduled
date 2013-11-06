var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var schoolSchema = new Schema({
  name: String,
  gpa: Number,
  s_length: Number,
  loc_state: String
});

module.exports = mongoose.model('School', schoolSchema);
