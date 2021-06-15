// Set up Express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;

// Require built-in npm package called path. This is needed for routing. 
const path = require("path");

// Set up body parser
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

// Spinning up the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));