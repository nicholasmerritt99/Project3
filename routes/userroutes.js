
var db = require("../models");
var axios = require("axios");
var {
  Op
} = require("sequelize");


app.post("/signup", function (req, res) {
    db.shield
      .create({
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
      })
      .then(function (dbShield) {
        console.log("\victim added to database\n");
        res.json(dbShield);
      });
  });

