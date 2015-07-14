'use strict';

angular.module('journalApp')
  .controller('MainCtrl', function ($scope,Journal) {

    var init = function (){
      Journal.getJournal(callbackJournal);
    };
    var callbackJournal = function(data){
      $scope.journal =data;


    };

    init();

  });
