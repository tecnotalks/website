var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

EventProvider = function(host, port) {
  this.db= new Db('tecnotalks', new Server(host, port, {auto_reconnect: true}, {safe:false}));
  this.db.open(function(){});
};


EventProvider.prototype.getCollection= function(callback) {
  this.db.collection('events', function(error, event_collection) {
    if( error ) callback(error);
    else callback(null, event_collection);
  });
};

EventProvider.prototype.findAll = function(callback) {
    this.getCollection(function(error, event_collection) {
      if( error ) callback(error)
      else {
        event_collection.find().toArray(function(error, results) {
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};


EventProvider.prototype.findById = function(id, callback) {
    this.getCollection(function(error, event_collection) {
      if( error ) callback(error)
      else {
        event_collection.findOne({_id: event_collection.db.bson_serializer.ObjectID.createFromHexString(id)}, function(error, result) {
          if( error ) callback(error)
          else callback(null, result)
        });
      }
    });
};

EventProvider.prototype.save = function(events, callback) {
    this.getCollection(function(error, event_collection) {
      if( error ) callback(error)
      else {
        if( typeof(events.length)=="undefined")
          events = [events];

        for( var i =0;i< events.length;i++ ) {
          event = events[i];
          event.created_at = new Date();
          if( event.comments === undefined ) event.comments = [];
          for(var j =0;j< event.comments.length; j++) {
            event.comments[j].created_at = new Date();
          }
        }

        event_collection.insert(events, function() {
          callback(null, events);
        });
      }
    });
};

exports.EventProvider = EventProvider;