'use strict';

angular.module('tecnotalksSite.services', []).
  factory('RegisterService', ['Restangular', function(Restangular) {

    return{
        save:function (user){
            Restangular.all('services/user/save').post(user);

        }
    }

  }]);