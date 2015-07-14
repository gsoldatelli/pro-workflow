var controladorArtista = angular.module('controladorArtista', []);


controladorArtista.controller( 'ControladorLista', ['$scope', '$http', function  ( $scope, $http ) {
	$scope.artistas = $http.get('js/tche-data.json')
	.success(function(data){
		$scope.artistas = data;
		$scope.ordemArtistas = 'name';
	});
	}
]);

controladorArtista.controller( 'ControladorDetalhe', ['$scope', '$http', '$routeParams', function  ( $scope, $http, $routeParams ) {
	$scope.artistas = $http.get('js/tche-data.json')
	.success(function(data){
		$scope.artistas = data;
		$scope.whichItem = $routeParams.itemId;


		if ($routeParams.itemId > 0 )
		{
			$scope.prevItem = Number($routeParams.itemId) - 1;
		}
		else 
		{ 			
			$scope.prevItem = $scope.artistas.length - 1;
		}

		if ($routeParams.itemId < $scope.artistas.length - 1 )
		{
			$scope.nextItem = Number($routeParams.itemId) + 1;
		}
		else 
		{ 			
			$scope.nextItem = 0;
		}

	});
	}
]);