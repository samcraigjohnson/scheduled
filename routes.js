/**
* This is used to route all requests to the specific controllers
*/

var Admin = require('./controllers/Admin');

module.exports = function(app){
  app.get('/', function(req, res){
   console.log('rending home page')   
   res.render('index', { title: "classti.me" }); 
  });
  
  app.all('/students*', function(req, res, next){
     require('./routes/studentRoutes')(app); 
  });

  app.all('/admin*', function(req, res, next){
   Admin.run(req, res, next);
  }); 

}
