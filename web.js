// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();
var EventProvider = require("./eventprovider-mongodb").EventProvider;

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});