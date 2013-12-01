var BaseController = require("./Base");
var View = require("../views/Base");
var School = require("../models/School");
var Student = require("../models/Student");

module.exports = BaseController.extend({
  name: "Students",
  run: function(req, res, next){
    var v = new View(res, 'students');
    School.findOne({ _id: 0 }, function(err, school){
      console.log("displaying students from school:" + school.name);
      
      Student.find({_school: school.id}).exec(function (err, students){
        console.log("attempting to render students:" + students);
        v.render({
          title: "Students from " + school.name + ":",
          students: students,
        });
      });

    });
  },
  create: function(req, res, next){
      var v = new View(res, "addStudent");
      console.log("attempting to render new student page");
      v.render({});
  },
  authorize: function(req){
    
  }
});


