'use strict';

angular.module('milesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('place-form', {
        url: '/place-form',
        template: '<placeform></placeform>',
        authenticate: true,
      });
  });
