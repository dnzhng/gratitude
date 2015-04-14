'use strict';

angular.module('gratitudeApp')
.controller('ProfileCtrl', function ($scope, $modal) {
	$scope.posts = [
	{title: 'post 1', body: 5},
	{title: 'post 2', body: 2},
	{title: 'post 3', body: 15},
	{title: 'post 4', body: 9},
	{title: 'post 5', body: 4}
	];

	$scope.addPost = function(){
		if (!$scope.body || $scope.body === "") {
			return;
		}
		var date = new Date;
		var options = { month: 'long', day: 'numeric', year: 'numeric' }
		$scope.posts.push({title: date.toLocaleDateString('en-US', options), body: $scope.body});

		$scope.body = "";
	};
});
