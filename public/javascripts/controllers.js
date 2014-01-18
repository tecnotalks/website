'use strict';

/* Controllers */

angular.module('tecnotalksSite.controllers', [])
  .controller('EventEditController', ['$scope','EventService', function($scope, EventService) {

  	$scope.event = {};
  	$scope.save = function(event) {
      console.log("antes do bla");
      return {status: "bla"};
      console.log("depois do bla");
        EventService.save(event);
    }

  }])
  .controller('RegistroCtrl', ['$scope','RegisterService', function($scope, RegisterService) {

    $scope.user = {};
    $scope.save = function(user) {
        RegisterService.save(user);
    }

  }]);