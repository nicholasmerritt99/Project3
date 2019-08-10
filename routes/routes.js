var path = require("path");

module.exports = function(app) {
	// if user enters survey in URL or presses survey button, serves the survey HTML file
	app.get("/abuse", function(req, res) {
		res.sendFile(path.join(__dirname, "/../abuse.html"));
	});

	// fallback use route for homepage
	app.get("/",function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/dummy.html"));
	});

	app.get('/s', function(req, res, next) {
		hisfunction()

		
	  });

	  
	  
	app.get('/api/getSearchResults', (req, res) => {
 		
});


};