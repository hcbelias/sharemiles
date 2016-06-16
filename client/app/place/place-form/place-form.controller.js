'use strict';
(function(){

class PlaceFormComponent {

  constructor($translate, $scope) {
    this.translate = $translate;
    this.scope = $scope;
  }

  $onInit(){
    this.scope.place = {};
    this.loadCategoryData();
  }

  loadCategoryData(){
    this.scope.categoryList = ['Home', 'Work', 'Store', 'University'];
    this.translate(this.scope.categoryList).then(this.translateCategoryData.bind(this));
  }

  translateCategoryData(translations){
    this.scope.categoryList = translations;
  }
}

angular.module('milesApp')
  .component('placeform', {
    templateUrl: 'app/place/place-form/place-form.html',
    controller: PlaceFormComponent
  });

})();
