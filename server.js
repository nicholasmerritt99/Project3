var express = require("express");

var app = express();
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routes/routes.js")(app);



// listen on port 3001
var PORT = process.env.PORT || 3001;
db.sequelize.sync().then(function() {
 app.listen(PORT, function() {
   console.log("App now listening on port:", PORT);
 });
});