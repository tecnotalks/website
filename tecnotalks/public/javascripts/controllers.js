'use strict';

/* Controllers */

angular.module('tecnotalksSite.controllers', [])
  .controller('EventEditController', ['$scope','EventService', function($scope, EventService) {

  	$scope.event = {};
  	$scope.save = function(event) {
        EventService.save(event);
    }

  }])
  .controller('RegistroCtrl', ['$scope','RegisterService', function($scope, RegisterService) {

    $scope.user = {};
    $scope.save = function(user) {
        RegisterService.save(user);
    }

  }]);