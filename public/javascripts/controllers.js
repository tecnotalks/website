'use strict';

/* Controllers */

angular.module('tecnotalksSite.controllers', [])
  .controller('EventEditController', ['$scope','EventService', function($scope, EventService) {

          $scope.event = {};
          $scope.save = function(event) {
        EventService.save(event);
    }

  }])
  .controller('RegistroCtrl', ['$scope','RegisterService', 'md5', function($scope, RegisterService, md5) {

    $scope.user = {};
    $scope.save = function(user) {
      
        if(user.confirmPassword != user.password) {
          $scope.error = true;
          $scope.message = "Senhas não conferem!";
          return;
        }

        user.password = md5.createHash(user.password);
        delete user.confirmPassword;

        RegisterService.save(user);
    }

  }]);