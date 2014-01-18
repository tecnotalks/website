'use strict';

/* Controllers */

angular.module('tecnotalksSite.controllers', [])
  .controller('EventEditController', ['$scope','EventService', function($scope, EventService) {

    $scope.event = {};
    // $scope.events = EventService.list();
    EventService.list(function(data) {
      $scope.events = data;
    });
    $scope.save = function(event) {
        EventService.save(event, 
          function(data) {
            $scope.success = true;    
            $scope.message = "Evento criado com sucesso! ";
          },
          function(data) {
            $scope.error = true;    
            $scope.message = "Algum problema ocorreu :p ! ";
          });
        
        return;
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

        RegisterService.save(user, function(data){
          $scope.success = true;
          $scope.message = data.message;
          $scope.user = {};
        },
        function(data){
          $scope.error = true;
          $scope.message = data.message;
        }
        );

    }

  }]).controller('LoginCrtl',['$scope','RegisterService','md5', function($scope, RegisterService, md5) {

    $scope.credentials = {};
    $scope.attemptLogin = function(credentials) {
      RegisterService.attemptLogin({email : credentials.email, password : md5.createHash(credentials.password)}
        function(){
          console.log('certo');
        },
        function(){
          console.log('erro');
        });
    }
  }]);