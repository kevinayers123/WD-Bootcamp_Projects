var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/12/08/17/45/lake-sara-1892494_1280.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_1280.jpg"},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_1280.jpg"},
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/12/08/17/45/lake-sara-1892494_1280.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_1280.jpg"},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_1280.jpg"},
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/12/08/17/45/lake-sara-1892494_1280.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_1280.jpg"},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_1280.jpg"},
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/12/08/17/45/lake-sara-1892494_1280.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402_1280.jpg"},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/02/09/16/35/night-1189929_1280.jpg"},
]


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;  
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);

    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(3000, function(){
    console.log("YelpCamp Server Has Started!");
});