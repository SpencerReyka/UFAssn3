var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	Listing = require('./ListingSchema.js'),
	config = require('./config');

	mongoose.connect(config.db.uri);

/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
	Listing.find({name: 'Library West'}, function(err, result){
	if(err) throw err;
	console.log('Result: '+result);
	});
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.findOneAndRemove({ code: 'CABL'}, function(err, deleteResult){
	   if (err) throw err;
	   console.log('Result deleted: '+deleteResult);
   });
};
var updatePhelpsMemorial = function() {
	Listing.findOneAndUpdate({ code: 'PHL'},{address: '102 Phelps Lab, Gainesville, FL 32611'}, function(err, updateResult){
	if (err) throw err;
	console.log('Updated value: '+updateResult);
	})
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
	Listings.find({}, function(err, results){
		if(err) throw err;
		console.log(results);
	});
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
