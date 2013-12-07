'use strict';

/* Controllers */

angular.module('tecnotalksSite.controllers', [])
  .controller('EventEditController', ['$scope',function($scope) {

  	$scope.event = {};

  }])
  .controller('RegistroCtrl', ['$scope','RegisterService', function($scope, RegisterService) {

    $scope.user = {};
    $scope.save = function(user) {
        RegisterService.save(user);
    }

  }]);