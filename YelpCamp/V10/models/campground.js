
var mongoose = require("mongoose");
 
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});
 
module.exports = mongoose.model("Campground", campgroundSchema);
//Campground.create(
//    {
//        name: "Granite Hill", 
//        image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_1280.jpg",
 //       description: "This is a huge granite hill. No bathrooms. No water. Beautiful granite."
//    }, function(err, campground){
//       if(err){
 //           console.log(err);   
 //     } else {
 //          console.log("Newly Created Campground");
 //          console.log(campground);
//     }
//  });