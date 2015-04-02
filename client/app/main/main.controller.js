'use strict';

angular.module('gratitudeApp')
	.controller('MainCtrl', function ($scope, $window) {
		
		$scope.loginOauth = function(provider) {
			$window.location.href = '/auth/' + provider;
		};
	
});
