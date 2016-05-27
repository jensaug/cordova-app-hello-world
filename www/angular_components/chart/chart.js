(function () {
    'use strict';

        angular.module('tillganglig.chart', [])

        .controller("ChartCtrl", [ '$scope', 'Restangular', function ($scope, Restangular) {
            $scope.name = "Calvin Hobbes";
            Restangular.all('json/measures.json').getList().then(function (response) {
                $scope.measures = response;
            });
        }]);

})();
