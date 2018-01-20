 var mysql = require("mysql");   
    
  //these is my authentication    
 var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });

//This is my actual connection (openning a port to connect to the data base)
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });


  








  //Here I export my connection
  module.exports = connection;