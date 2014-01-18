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
        save:function (event){
          console.log(event);
          
            Restangular.all('services/event/save').post(event).then(
              function(dataSuccess) {
                console.log(dataSuccess);
                //tem que dar mensagem de sucesso pro usuario
              },
              function(dataError) {
                console.log(dataError);
                // tem que botar o foco do cursor no campo senha :D e avisar o cara :P
              });

        }
    }

  }]);

  //service/event/save
