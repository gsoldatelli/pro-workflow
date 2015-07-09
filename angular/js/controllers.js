var controladorArtista = angular.module('controladorArtista', []);


controladorArtista.controller( 'ControladorLista', ['$scope', '$http', function  ( $scope, $http ) {
	$scope.artistas = $http.get('js/tche-data.json')
	.success(function(data){
		$scope.artistas = data;
		$scope.ordemArtistas = 'name';
	});
	}
]);
