(function() {

  'use strict';

  /**
   * @ngdoc directive
   * @name izzyposWebApp.directive:adminPosHeader
   * @description
   * # adminPosHeader
   */
  angular.module('sbAdminApp')
      .directive('stats',stats);

    function stats() {
        return {
        templateUrl:'scripts/directives/dashboard/stats/stats.html',
        restrict:'E',
        replace:true,
        scope: {
          'model': '=',
          'comments': '@',
          'number': '@',
          'name': '@',
          'colour': '@',
          'details':'@',
          'type':'@',
          'goto':'@'
        }
        
      }
    }

})();