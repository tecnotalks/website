'use strict';

angular.module('tecnotalksSite.services', []).
  factory('RegisterService', ['Restangular', function(Restangular) {

    return{
        save:function (user){
            Restangular.all('services/user/save').post(user);

        }
    }

  }]).
   factory('EventService', ['Restangular', function(Restangular) {

    return{
        save:function (event, onSuccess, onError){
          
            Restangular.all('services/event/save').post(event).then(
              function(data) {
                onSuccess(data);
              },
              function(data) {
                onError(data);
              });
        }
    }

  }]);

  //service/event/save
