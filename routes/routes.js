var path = require("path");
const axios = require('axios');
const cheerio = require('cheerio');



module.exports = function(app) {
	// if user enters survey in URL or presses survey button, serves the survey HTML file
	app.get("/abuse", function(req, res) {
		res.sendFile(path.join(__dirname, "/../abuse.html"));
	});

	// fallback use route for homepage
	app.get("/",function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/dummy.html"));
	});

	app.get('/abuseshelter', function(req, res, next) {
		const googleBaseUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json';
		const googleSearches = ['abuse+shelters'];
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

	  
	  
	app.get('/api/getSearchResults', (req, res) => {
 		
});


};