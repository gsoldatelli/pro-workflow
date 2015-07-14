var myApp = angular.module('myApp',
[ 'ngRoute',
'controladorArtista'
]);

myApp.config(['$routeProvider', function($routeProvider) {	$routeProvider.
	when('/list', { 
		templateUrl: 'partials/lista.html',
		controller: 'ControladorLista'
	})
	.when('/detalhes/:itemId', {
		templateUrl: 'partials/detalhes.html',
		controller: 'ControladorDetalhe'
	})
	.otherwise(
		{redirectTo: '/list'}
		);
	
}]);