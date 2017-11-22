'use strict';

/**
 * @ngdoc function
 * @name psicologiaMirafloresApp.controller:MaincontrollerCtrl
 * @description
 * # MaincontrollerCtrl
 * Controller of the psicologiaMirafloresApp
 */
angular.module('psicologiaMirafloresApp')
  .controller('MaincontrollerCtrl', ['$scope','$location',function ($scope,$location) {
    $scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     console.log(viewLocation);
     return active;
};
  }]);
