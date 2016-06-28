'use strict';

angular.module('milesApp')
  .service('PlaceService', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource('/api/places/:placeId', {
      placeId: 'placeId'
    }, {
      'listPlaces': {
        method: 'GET',
        params: {
          placeId: ''
        },
        isArray: true
      },
      'getPlace': {
        method: 'GET'
      },
      'updatePlace': {
        method: 'PUT',
        isArray: true //returns current place list
      },
      'createPlace': {
        method: 'POST',
        params: {
          placeId: ''
        },
        isArray: true //returns current place list
      },
      'deletePlace': {
        method: 'DELETE',
        isArray: true //returns current place list
      },
    });
  });
