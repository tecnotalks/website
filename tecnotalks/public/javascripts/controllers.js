'use strict';

/* Controllers */

angular.module('tecnotalksSite.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('RegistroCtrl', ['$scope','RegisterService', function($scope, RegisterService) {

    $scope.user = {};
    $scope.save = function(user) {
        RegisterService.save(user);
    }

  }])
  .controller('MyCtrl2', [function() {

  }]);