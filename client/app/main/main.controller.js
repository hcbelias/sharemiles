'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, NgMap, appConfig, NavigatorGeolocation) {
    this.$http = $http;

  }

}

angular.module('milesApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
