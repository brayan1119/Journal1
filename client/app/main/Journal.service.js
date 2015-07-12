'use strict';

angular.module('journalApp')
  .service('Journal', function ($http) {
    var self=this;
    self.getJournal = function(callback){
      $http.get('http://localhost:8080/Journal/Controller/prueba')
        .success(function(data){
          callback(data);
        })
        .error(function(){
          alert('no pude :(');
        });
    };

  });
