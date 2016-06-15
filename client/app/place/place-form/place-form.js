'use strict';

angular.module('milesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create-place-form', {
        url: '/place/new',
        template: '<placeform></placeform>',
        authenticate: true,
      });
  });
