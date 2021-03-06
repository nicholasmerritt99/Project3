var path = require("path");
const axios = require('axios');
const cheerio = require('cheerio');
var db = require("../models");
var {
  Op
} = require("sequelize");



module.exports = function(app) {
	
	app.get("/abuse", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/abuse.html"));
	});

	app.get("/login", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/login.html"));
	});

	app.get("/home", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/dummy.html"));
	});

	app.get("/cause", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/cause.html"));
	});

	app.get("/abuse", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/abuse.html"));
	});

	app.get("/inhome", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/inhome.html"));
	});

	app.get("/outofhome", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/outofhome.html"));
	});

	app.get("/others", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/others.html"));
	});

	app.get("/minors", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/minors.html"));
	});

	app.get("/login", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/login.html"));
	});

	app.get("/signup", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/signup.html"));
	});

	
	app.get("/",function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/dummy.html"));
	});

	app.get('/abuseshelter', function(req, res, next) {
		const googleBaseUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
		const googleSearches = ['abuse+shelters'];
	// test and replace w sign up form ids and variables ** this already works w these variables.
		const city = 'dallas';
		const state = 'texas';
		const searchTerm = googleSearches[0]
		const scrapeUrl = `${googleBaseUrl}?query=${searchTerm}+${city}+${state}&key=AIzaSyA7UQiFxk93uZYMBFDUkQ2WDC0atq88sBA`;

		axios.get(scrapeUrl).then(response => {
			const $ = cheerio.load(response.data);
			let titleList = [];
			const headings = $('.BNeawe.deIvCb.AP7Wnd');
		   console.log('DATA', response.data);
			console.log('HEADINGS: ', headings);
		   
		   console.log(titleList);
   
		   });

		
	  });

	  

app.post("/saveaccount", function (req, res) {
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


};
