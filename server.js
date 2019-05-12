var express = require('express');
var path = require('path');
var routes = require(path.join(__dirname, './controllers/burgers_controllers'))
var exphbs = require("express-handlebars");

var app = express();

var port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use('/', routes);

app.listen(port, (err) => {
    if (err) throw err;
    console.log('listening on port ' + port);
})

exports.express = app;