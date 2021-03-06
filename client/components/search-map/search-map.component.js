/* globals google:false*/
'use strict';

(function() {

let OnSelectPlaceEvent;

class SearchMapController {

  constructor(NgMap, appConfig, NavigatorGeolocation) {
    this.googleMapsApiUrl = appConfig.googleMapsLink + appConfig.googleMapsAPIKey;
    this.NgMap = NgMap;
    this.NavigatorGeolocation = NavigatorGeolocation;
    this.placeList = [];
    this.addressText = '';
    OnSelectPlaceEvent = this.onSelectPlace;
  }

  placeChanged(context, scope) {
    //outside scope
    var place = this.getPlace();
    if(place.geometry){ // getting from autocomplete
      scope.address = scope.destination = place;
      scope.map.setCenter(scope.address.geometry.location);
    }
//    scope.onSelectPlace(place);
  }

  $onInit(){
    this.NgMap.getMap() // Promise
      .then(this.loadCurrentAddress.bind(this));
  }

  loadCurrentAddress(map){
    this.map = map;
    this.NavigatorGeolocation.getCurrentPosition() // Promise
      .then(this.updateCurrentAddress.bind(this))
      .catch(function(err){ console.log('Error - getting current position: ' + err)});
  }

  updateCurrentAddress(position){
    var lat = position.coords.latitude, lng = position.coords.longitude;
    this.currentPosition = this.destination = new google.maps.LatLng(lat, lng);
    this.map.setCenter(this.currentPosition);
  }

  getMatches(text){
    var defaultPlace = this.currentPosition || new google.maps.LatLng(-33.8665433,151.1956316);
    var currentMap =  this.map || new google.maps.Map(document.getElementById('map'), {
      center: defaultPlace,
      zoom: 15
    });

    var request = {
      location: defaultPlace,
      radius: '500',
      query: text
    };

    var service = new google.maps.places.PlacesService(currentMap);
    service.nearbySearch(request, this.loadResults.bind(this));
    return this.placeList; // must return due to autocomplete comp

  }

  loadResults(results, status){
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      this.placeList = results;
    }
    else {
      this.placeList = [];
      console.log('Error loading place - google place API : ' + status);
    }
  }

}

angular.module('milesApp')
  .component('searchMap', {
    templateUrl: 'components/search-map/search-map.html',
    controller: SearchMapController,
    bindings: {
      address: '<',
      onSelectPlace: '&'
    }
  });

})();
