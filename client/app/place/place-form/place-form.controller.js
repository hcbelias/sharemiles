'use strict';
(function(){

class PlaceFormComponent {


  constructor($translate, $q, $timeout) {
    this.$translate = $translate;
    this.$q = $q;
    this.$timeout = $timeout;
  }

  $onInit(){
    this.place = {};
    this.loadCategoryData();
    this.address = {};
  }

  setAddress(address){
    debugger;
    this.address = address;
  }

  loadCategoryData(){
    this.categoryList = ['Home', 'Work', 'Store', 'University'];
    this.$translate(this.categoryList).then(this.translateCategoryData.bind(this));
  }

  translateCategoryData(translations){
    this.categoryList = translations;
  }

  savePlaceForm(){
    debugger;

  }

}

angular.module('milesApp')
  .component('placeform', {
    templateUrl: 'app/place/place-form/place-form.html',
    controller: PlaceFormComponent,
    controllerAs: 'ctrl'
  });

})();
