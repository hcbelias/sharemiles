'use strict';
(function(){

class PlaceComponent {

  constructor($scope,  PlaceService) {
    this.placeList = [];
    this.PlaceService = PlaceService;
  }

  $onInit(){
    this.PlaceService.listPlaces().$promise
    .then(response => {
      this.placeList = response;
    });
  }
}

angular.module('milesApp')
  .component('place', {
    templateUrl: 'app/place/place.html',
    controller: PlaceComponent
  });

})();
