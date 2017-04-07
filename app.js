var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = 'mongodb://localhost:27017/restaurant_db';

mongo.connect(url, function(err, db){
	 var collection = db.collection('restaurants');


// ------------------ADD-A-NEW-OBJECT---FUNCTION-------------//
//   var allChoice = prompt("Would you like to make a new restaurant?");
//   if(allChoice == "yes"){

// 	  var addRestName = prompt("Enter a new restaurant name: ");
// 	  var addRestStreet = prompt("Enter new restaurants street: ");
// 	  var addRestZip = prompt("Enter new restaurants zip code: ");
// 	  var addRestYelp = prompt("Enter new restaurants yelp link: ");
// 	  collection.insert(
// 		  {
// 		  	name: addRestName,
// 		  	street: addRestStreet,
// 		  	zip: addRestZip,
// 		  	yelp: addRestYelp
// 		  });
// }
//------------------------------------------------------------//

//--------------EDIT--A--RESTUARANT----------------------//
	var editByName = prompt("Which restaurant would you like to change?");
	
		var editRestName = prompt("Give the restaurant a new name?");
		var editRestStreet = prompt("Give the restuarant a new street");
		var editRestZip = prompt("Give the restuarant a new Zip?");
		var editRestYelp = prompt("Give the restuarant a new Yelp?");

	
		
		collection.update({name: editByName},

		{
			name: editRestName,
			street: editRestStreet,
			zip: editRestZip,
			yelp: editRestYelp
		});



	// --------------DELETE---FUNCTION-----------//

			// var deleteByName = prompt("Which restaurant to delete?");
			// 	collection.remove({name: deleteByName});
	//------------------------------------------//



		

collection.find().toArray(function(err, doc){
      console.log(doc);
    });
});




    
  // else {
  //   console.log("Aw, you don't want to see the restaurants?");
  // }




// });