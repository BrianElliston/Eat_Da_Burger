var mysql = require("mysql");
var handle = require("express-handlebars");
var exp = require("express");
var meth = require("method-override");
var bodypars = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");




