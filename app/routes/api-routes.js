const tableData = require("../data/table-data.js");
const waitingListData = require("../data/waitinglist-data.js");

module.exports = function (app) {
    app.get("/api/tables", (req,res) => res.json(tableData));
    
    app.get("/api/waitlist", (req,res) => res.json(waitingListData));
};