'use strict';
(function(){

class PlaceComponent {

  constructor($scope, socket, Place) {
    this.socket = socket;
    this.placeList = [];
    this.Place = Place;
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('place');
    });
  }

  $onInit(){
    this.Place.listPlaces();
    //.then(response => {
    //  this.placeList = response.data;
    //  this.socket.syncUpdates('place', this.placeList);
    //});
  }
}

angular.module('milesApp')
  .component('place', {
    templateUrl: 'app/place/place.html',
    controller: PlaceComponent
  });

})();
