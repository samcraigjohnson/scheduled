var BaseController = require("./Base");
var View = require("../views/Base");
var Student = require("../models/Student");

//fake data
new Student({
  f_name: "Sam",
  l_name: "Johnson",
  s_id: 1,
  year: 2012
}).save();

module.exports = BaseController.extend({
  name: "Students",
  run: function(req, res, next){
    var v = new View(res, 'students');
    Student.find({f_name: "Sam"}, function(err, docs){
      v.render({
        title: "Students",
        students: docs
      });
    });
  },
  authorize: function(req){
    
  }
});


