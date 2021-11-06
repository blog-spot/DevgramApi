"use strict";
exports.__esModule = true;
// setting up express
var express_1 = require("express");
var fs = require("fs");
var bodyParser = require('body-parser');
var app = (0, express_1["default"])();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express_1["default"].json());
app.get("/", function (req, res) {
    res.send("Hello Typescript with Node.js! __ api :)");
});
app.get("/api", function (req, res) {
    fs.readFile('./api/test.json', 'utf8', function (err, data) {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});
app.listen(PORT, function () {
    console.log("Server Running here \u26A1  https://localhost:" + PORT);
});
