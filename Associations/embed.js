var mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

//USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);


// var newUser = new User({
//   email: "hermione@hogwarts.edu",
//    name: "Hermione Granger"
// });

// newUser.posts.push({
//      title: "How to brew polyjuice postion",
//      content: "Just kidding."
// });

// newUser.save(function(err, user){
//     if(err){
//        console.log("ERROR!");
//     } else {
//        console.log("Created new User!");
//     }
// });

//var newPost = new Post({
 //   title: "reflections on Apples",
 //   content: "They are delicious"
// });

//newPost.save(function(err, post){
 //   if(err){
//        console.log(err);
 //   } else {
 //       console.log(post);
 //   }
//})

User.findOne({name: "Hermione Granger"}, function(err, user){
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            title: "3 Things I really hate",
            content: "Voldemort. Voldemort. Voldemort"
        })
        user.save(function(err,user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        })
    }
});