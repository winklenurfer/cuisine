module.exports = function(app) {

	var Ingredient = require('./models/ingredient');

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// Get all ingredients
	app.get('/api/ingredients', function(req, res) {
		// use mongoose to get all ingredients in the database
		Ingredient.find(function(err, ingredients) {
			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err);

			res.json(ingredients); // return all ingredients in JSON format
		});
	});

	// Create new ingredient
	app.post('/api/ingredients', function(req, res) {
		Ingredient.create({
			name : req.body.name,
			inPantry : req.body.inPantry,
			category : req.body.category
		}, function(err, ingredients) {
			if (err)
				res.send(err);

			Ingredient.find(function(err, ingredients) {
				if (err)
					res.send(err)
				res.json(ingredients);
			});
		});

	});

	// Delete existing ingredient by _id
	app.delete('/api/ingredients/:ingredient_id', function(req, res) {
		Ingredient.remove({
			_id : req.params.ingredient_id
		}, function(err, ingredients) {
			if (err)
				res.send(err);

			Ingredient.find(function(err, ingredients) {
				if (err)
					res.send(err)
				res.json(ingredients);
			});
		});
	});


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};