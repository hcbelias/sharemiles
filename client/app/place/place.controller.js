'use strict';
(function(){

class PlaceComponent {

  constructor($scope, socket, PlaceService) {
    this.socket = socket;
    this.placeList = [];
    this.PlaceService = PlaceService;
    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('place');
    });
  }

  $onInit(){
    //this.PlaceService.listPlaces();
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
