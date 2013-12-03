var Students = require('./controllers/Students');

module.exports = function(app){
    
  app.get('/students', function(req, res, next){
    Students.run(req, res, next);
  });
  app.get('/students/new', function(req, res, next){
    Students.create(req, res, next);
  });
  
    
    
}