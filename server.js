var express = require("express");
var path = require("path");
const routes = require("./routes/apiRoutes");
var mongoose = require("mongoose");

var app = express();

// process.env.PORT if there is a port on process object that has an environment that has a PORT
// will use the process.env.PORT in deployed phase, otherwise use port 3000 in development phase
var PORT = process.env.PORT || 3000;

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfolio";
mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true },
  console.log("Connected to MongoDB!")
);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.use(express.static("public"));

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});