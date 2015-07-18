'use strict';

angular.module('journalApp')
  .service('Journal', function ($http) {
    var self=this;
    self.getJournal = function(callback,palabra){
      if( palabra == undefined ){
        palabra = '';
      };
      $http.get('http://localhost:8080/Journal/Controller/prueba1?Buscar='+palabra)
        .success(function(data){
          callback(data);
        })
        .error(function(){
          alert('no pude :(');
        });
    };

  });
