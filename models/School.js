var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schoolSchema = new Schema({
  _id: Number,
  name: String,
  gpa: Number,
  sch_length: Number,
  loc_state: String,
  loc_city: String,
  start_date: Date,
  end_date: Date,
  start_time: Number,
  end_time: Number,
  students: [{ type: Schema.Types.ObjectId, ref: 'Student'}],
  teachers: [{ type: Schema.Types.ObjectId, ref: 'Teachers'}]
});

module.exports = mongoose.model('School', schoolSchema);
