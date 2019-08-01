const express = require("express");
const path = require("path")
const mongoose = require("mongoose");
mongoose.Promise = global.Promise
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

mongoose.connect(process.env.MONGODB_URI || "mongodb://SCbariss:can123456@ds247637.mlab.com:47637/heroku_g8vx3r7k", { useNewUrlParser: true });
// Start the API server

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
