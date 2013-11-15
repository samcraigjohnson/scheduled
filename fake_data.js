var Student = require("./models/Student");
var School = require("./models/School");

School.find({}).remove(); 
Student.find({}).remove(); 

//fake school data
var pt= new School({ _id:0, name: "Park Tudor", gpa: 4.0, s_length: 7, loc_state: "IN"});

pt.save(function(err){
  if (err) console.log(err);
});

var sam = new Student({
  f_name: "Sam",
  l_name: "Johnson",
  year: 2012,
  _school: pt._id
});

sam.save(function(err){if(err) console.log(err);});

var allison = new Student({
  f_name: "Allison",
  l_name: "Milchling",
  year: 2012,
  _school: pt._id
});

allison.save(function(err){if(err) console.log(err);});

Student.find({}).populate('_school').exec();

console.log("completed population");
pt.students.push(sam);
pt.save(function(err){if(err) console.log(err);});

pt.students.push(allison);
pt.save(function(err){if(err) console.log(err);});
