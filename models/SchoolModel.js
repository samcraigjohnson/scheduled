var schoolCounter = 1;

SchoolModel = function(){};
SchoolModel.prototype.dummyData = [];

SchoolModel.prototype.findAll = function(callback) {
  callback( null, this.dummyData )
};

SchoolModel.prototype.findById = function(id, callback) {
  var result = null;
  for(var i =0;i<this.dummyData.length;i++) {
    if( this.dummyData[i]._id == id ) {
      result = this.dummyData[i];
      break;
    }
  }
  callback(null, result);
};

SchoolModel.prototype.save = function(schools, callback) {
  var school = null;

  if( typeof(schools.length)=="undefined")
    schools = [schools];

  for( var i =0;i< schools.length;i++ ) {
    school =  schools[i];
    school._id =  schoolCounter++;
    school.created_at = new Date();

    if(  school.comments === undefined )
       school.comments = [];

    for(var j =0;j<  school.comments.length; j++) {
       school.comments[j].created_at = new Date();
    }
    this.dummyData[this.dummyData.length]= school;
  }
  callback(null, schools);
};

/* Lets bootstrap with dummy data */
new SchoolModel().save([
  {name: 'Park Tudor', location_city: 'Indianapolis', location_state: 'IN',  comments:[{author:'Bob', comment:'I love it'}, {author:'Dave', comment:'This is rubbish!'}]},
  {name: 'Eastern Hancock', location_city: 'Hancock', location_state: 'IN',  comments:[{author:'BobEH', comment:'I love it'}, {author:'DaveEH', comment:'This is rubbish!'}]}
  
], function(error, schools){});

exports.SchoolModel = SchoolModel;
