'use strict';

angular.module('journalApp')
  .controller('MainCtrl', function ($scope,Journal) {

    var init = function (){
      Journal.getJournal(callbackJournal,$scope.palabra);
    };
    var callbackJournal = function(data){
      $scope.journal =data;

      $scope.pageSize=500;
      $scope.currentPage=1;

    };

    $scope.change = function(){
      init();
    };

    init();

  });
