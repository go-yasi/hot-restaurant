// Set up Express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8888;

// Set up body parser
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

// Spinning up the server
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));