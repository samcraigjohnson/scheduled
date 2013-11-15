var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schoolSchema = new Schema({
  _id: Number,
  name: String,
  gpa: Number,
  s_length: Number,
  loc_state: String,
  students: [{ type: Schema.Types.ObjectId, ref: 'Student'}]
});

module.exports = mongoose.model('School', schoolSchema);
