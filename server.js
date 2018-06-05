const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});