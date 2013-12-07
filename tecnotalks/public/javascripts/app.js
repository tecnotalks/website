'use strict';


// Declare app level module which depends on filters, and services
angular.module('tecnotalksSite', [
  'ngRoute',
  'tecnotalksSite.services',
  'tecnotalksSite.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {templateUrl: '/views/dashboard.html'});
  $routeProvider.when('/agenda', {templateUrl: '/views/agenda.html', controller: 'MyCtrl1'});
  $routeProvider.when('/sugestoes', {templateUrl: '/views/sugestoes.html', controller: 'MyCtrl2'});

  $routeProvider.otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(true);

}]);