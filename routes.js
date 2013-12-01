/**
* This is used to route all requests to the specific controllers
*/

var Admin = require('./controllers/Admin');
var Students = require('./controllers/Students');

module.exports = function(app){
  app.get('/', function(req, res){
   console.log('rending home page')   
   res.render('index', { title: "classti.me" }); 
  });
  app.get('/students', function(req, res, next){
    Students.run(req, res, next);
  });
  app.get('/students/new', function(req, res, next){
    Students.create(req, res, next);
  });
  app.all('/admin*', function(req, res, next){
   Admin.run(req, res, next);
  }); 

}
