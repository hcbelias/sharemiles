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
        method: 'PUT'
      },
      'createPlace': {
        method: 'POST'
      },
      'deletePlace': {
        method: 'DELETE'
      },
    });
  });
