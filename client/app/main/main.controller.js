'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, NgMap, appConfig, NavigatorGeolocation) {
    this.$http = $http;
    this.NgMap = NgMap;
    this.googleMapsApiUrl = appConfig.googleMapsLink + appConfig.googleMapsAPIKey;
    this.NavigatorGeolocation = NavigatorGeolocation;
    this.currentPosition =  new google.maps.LatLng(-19.9398149, -43.94562020000001);
    NgMap.getMap() // Promise
      .then(this.loadCurrentAddress.bind(this));
  }

  loadCurrentAddress(map){
    this.map = map;
    this.NavigatorGeolocation.getCurrentPosition() // Promise
      .then(this.updateCurrentAddress.bind(this))
      .catch(function(error){

      });
  }
  updateCurrentAddress(position){
    var lat = position.coords.latitude, lng = position.coords.longitude;
    this.currentPosition = new google.maps.LatLng(lat, lng);
     this.map.setCenter(this.currentPosition);
  }
}

angular.module('milesApp')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });

})();
