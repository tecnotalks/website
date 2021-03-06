var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

UserProvider = function(host, port) {
  this.db = new Db('tecnotalks', new Server(host, port, {auto_reconnect: true}, {}));
  this.db.open(function(){});
};


UserProvider.prototype.getCollection= function(callback) {
  this.db.collection('users', function(error, user_collection) {
    if( error ) callback(error);
    else callback(null, user_collection);
  });
};

UserProvider.prototype.findAll = function(callback) {
    this.getCollection(function(error, user_collection) {
      if( error ) callback(error)
      else {
        user_collection.find().toArray(function(error, results) {
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};

UserProvider.prototype.save = function(users, callback) {
    this.getCollection(function(error, user_collection) {
      if( error ) callback(error)
      else {
        if( typeof(users.length)=="undefined")
          users = [users];

        for( var i =0;i< users.length;i++ ) {
          user = users[i];
          user.created_at = new Date();
        }

        user_collection.insert(users, function() {
          callback(null, users);
        });
      }
    });
};


UserProvider.prototype.getUserByEmailAndPassword = function(email, password ,callback) {
    this.getCollection(function(error, user_collection) {
      if( error ) callback(error)
      else {
        user_collection.find({email: email, password: password}).toArray(function(error, results) {
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};

exports.UserProvider = UserProvider;