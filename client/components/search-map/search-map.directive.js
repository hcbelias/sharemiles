'use strict';

angular.module('milesApp')
  .directive('searchMap', function (NgMap, appConfig, NavigatorGeolocation) {

    return {
      templateUrl: 'components/search-map/search-map.html',
      restrict: 'E',
      scope:{

      },
      link: function (scope, element) {
        scope.googleMapsApiUrl = appConfig.googleMapsLink + appConfig.googleMapsAPIKey;
        scope.NgMap = NgMap;
        scope.googleMapsApiUrl = appConfig.googleMapsLink + appConfig.googleMapsAPIKey;
        scope.NavigatorGeolocation = NavigatorGeolocation;
        scope.loadCurrentAddress = function(map){
          this.map = map;
          this.NavigatorGeolocation.getCurrentPosition() // Promise
            .then(this.updateCurrentAddress.bind(this))
            .catch(function(error){

            });
        };

        scope.updateCurrentAddress = function(position){
          var lat = position.coords.latitude, lng = position.coords.longitude;
          this.currentPosition = new google.maps.LatLng(lat, lng);
          this.map.setCenter(this.currentPosition);
        };

        NgMap.getMap() // Promise
          .then(scope.loadCurrentAddress.bind(scope));

      }
    };
  });
