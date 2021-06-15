const path = require("path");

// Basic route for all non-API pages
module.exports = function (app) {
    app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/../front-end/index.html")));

    app.get("/tables", (req, res) => res.sendFile(path.join(__dirname, "/../front-end/tables.html")));

    app.get("/reserve", (req, res) => res.sendFile(path.join(__dirname, "/../front-end/reserve.html")));
}
