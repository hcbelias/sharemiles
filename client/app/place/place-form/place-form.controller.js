'use strict';
(function(){

class PlaceFormComponent {

  constructor($scope, socket, Place) {

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
