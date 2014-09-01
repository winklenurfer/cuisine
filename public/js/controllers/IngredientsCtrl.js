angular.module('IngredientsCtrl', []).controller('IngredientsController', function($scope, $http) {

	$scope.formData = {};

	$http.get('/api/ingredients')
		.success(function(data) {
			$scope.ingredients = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	$scope.createIngredient = function() {
		$http.post('/api/ingredients', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.ingredients =data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.deleteIngredient = function(id) {
		$http.delete('/api/ingredients/' + id)
			.success(function(data) {
				$scope.ingredients = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

});