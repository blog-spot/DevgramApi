"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.get('/', function (req, res) {
    res.send('Hello from express and typescript');
});
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("App listening on PORT " + port); });
