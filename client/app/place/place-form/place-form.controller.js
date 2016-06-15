'use strict';
(function(){

class PlaceFormComponent {

  constructor($scope, socket, PlaceService) {
    this.place = {

    };

  }

  $onInit(){

  }
}

angular.module('milesApp')
  .component('placeform', {
    templateUrl: 'app/place/place-form/place-form.html',
    controller: PlaceFormComponent
  });

})();
