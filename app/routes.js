module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

	// sample api route
	app.get('/api/ingredients', function(req, res) {
		// use mongoose to get all ingredients in the database
		Ingredient.find(function(err, ingredients) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			res.json(ingredients); // return all ingredients in JSON format
		});
	});

};