var myApp = angular.module('myApp',
[ 'ngRoute',
'controladorArtista'
]);

myApp.config(['$routeProvider', function($routeProvider) {	
	$routeProvider.when('/list', { 
		templateUrl: 'partials/lista.html',
		controller: 'ControladorLista'
	}).otherwise(
		{redirectTo: '/list'}
		);
	
}]);