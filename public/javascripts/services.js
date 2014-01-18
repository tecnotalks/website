'use strict';

angular.module('tecnotalksSite.services', []).
  factory('RegisterService', ['Restangular', function(Restangular) {

    return{
        save:function (user, onSuccess, onError){
            Restangular.all('services/user/save').post(user).then(
              function(dataSuccess) {
                onSuccess.call(null, {status: true, message: "Usuário salvo com sucesso!"});
              },
              function(dataError) {
                onError.call(null, {status: false, message: "Usuário não foi salvo!"});
              });
        },
        attemptLogin: function(credentials, onSuccess, onError){
          Restangular.all('services/user/login').post(credentials).then(
            function(dataSuccess){
              onSuccess.call(null, {status: true, message:"Usuário logado!"});
          },function(dataError){
            onError.call(null, {status: true, message:"Email ou Senha inválidos"});
          }); 
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
        },
        list: function(onSuccess) {
            Restangular.one('services/events/list').get().then(function(data) {
              onSuccess(data);
            });

        }
    }

  }]);

  //service/event/save
