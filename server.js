// Dependencies
const express = require("express");
const path = require("path");

// Set up Express
const app = express();
const PORT = 8888;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));