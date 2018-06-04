const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

let friends = require("./app/data/friends.js");
let questions = require("./app/data/questions.js");

let app = express();
let PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
  });

  app.get("/test", function(req, res) {
    console.log(friends);
  });
