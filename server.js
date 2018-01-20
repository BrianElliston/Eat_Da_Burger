//requiring my packages before I use them
var mysql = require("mysql");
var exphbs = require("express-handlebars");
var express = require("express");
var meth = require("method-override");
var bodyparser = require("body-parser");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 8000;
//using express to allow handlebars to bring in external files from public folder
app.use(express.static(path.join(__dirname, 'public')));
//using express to make objects get passed appropriatly
app.use(bodyparser.urlencoded({ extended: false }));
//using express to parse out the json
app.use(bodyparser.json());
//using express to use main.handlebars as the default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//using express to tell node what template package we are using
app.set("view engine", "handlebars");

app.get("/", function(req, res){
    //This is rendering the index.handlbars
    res.render("index");
});










app.listen(PORT, function() {
    console.log("listening on port", PORT);
  });