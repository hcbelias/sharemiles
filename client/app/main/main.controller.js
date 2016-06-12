'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, NgMap, appConfig) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
    this.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    this.NgMap = NgMap;
    this.googleMapsApiUrl = appConfig.googleMapsLink + appConfig.googleMapsAPIKey;

    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  }
}

angular.module('milesApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
