'use strict';

angular.module('gratitudeApp')
.controller('ProfileCtrl', function ($scope) {

	var text = 'Lorem ipsum dolor sit amet, sed nihil mollis maluisset ad, ius ut omnium discere pertinacia. Purto sonet constituto ut cum, ne euismod sensibus salutatus mei. Cu nec viderer propriae delicata, luptatum scriptorem et sit. Quo ad adipisci quaerendum. Pri dicunt tincidunt ad, mollis scriptorem disputando cu sit \n\n Eripuit appellantur te mel. Ut eos vero zril maiorum, ei cum etiam prompta. Qui meis consetetur te, dicant voluptua dissentiet ad mea. Legere altera mei eu. Te animal periculis mei, ne placerat electram delicatissimi mea, ad nam democritum posidonium. \n\n Quem ponderum signiferumque an his, ubique salutandi usu ut. Mei at nibh voluptatum, eam vidisse fierent vituperatoribus cu. At dolore vocent concludaturque mel, per at mutat adipisci. Munere volutpat iudicabit sea no. Cu ius case recusabo, usu at tota dolorum neglegentur. \n\n Id has velit efficiendi sadipscing. Ut adhuc solum euismod nam. Equidem recteque disputationi mel id, has illum ridens consectetuer et. Pri cu possim iudicabit, eu semper propriae vulputate ius. Mel et enim causae, an duo affert postea equidem.';

	$scope.posts = [
	{title: 'February 10, 2016', body: text},
	{title: 'February 11, 2016', body: text},
	{title: 'February 12, 2016', body: text},
	{title: 'February 13, 2016', body: text},
	];

	$scope.addPost = function(){
		if (!$scope.body || $scope.body === '') {
			return;
		}
		var date = new Date();
		var options = { month: 'long', day: 'numeric', year: 'numeric' };
		$scope.posts.push({title: date.toLocaleDateString('en-US', options), body: $scope.body});

		$scope.body = '';
	};
});
