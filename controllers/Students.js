var BaseController = require("./Base");
var View = require("../views/Base");
var School = require("../models/School");
var Student = require("../models/Student");

module.exports = BaseController.extend({
  name: "Students",
  run: function(req, res, next){
    var v = new View(res, 'students');
    School.findOne({ _id: 0 }, function(err, school){
      v.render({
        title: "Students from " + school.name + ":",
        students: school.students,
      });
    });
  },
  authorize: function(req){
    
  }
});


