//requiring my packages before I use them
var mysql = require("mysql");
var exphbs = require("express-handlebars");
var express = require("express");
var meth = require("method-override");
var bodyparser = require("body-parser");
var path = require("path");
var connection = require("./config/connection.js")
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

    connection.query("SELECT * FROM burgers", function(request, response){
        res.render("index", {burgers: response});
    
    //This is rendering the index.handlbars
    })
});
//This code is capturing the user input and posting it in the data base
app.post("/newBurger", function(req, res){
    console.log("Button was Pushed")
    
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
        if (err) {
          return res.status(500).end();
        }
    res.redirect("/");
        // Send back the ID of the new burger
        // res.json({ id: result.insertId });
        // console.log({ id: result.insertId });
      });
});


app.post("/devourBurger", function(req, res){
console.log(req.body.id);
connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [req.body.id], function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    res.redirect("/");
});
});










app.listen(PORT, function() {
    console.log("listening on port", PORT);
  });