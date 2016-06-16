'use strict';
(function(){

const MIN_CHAR_DIFF = 3;

class PlaceFormComponent {


  constructor($translate, $q, $timeout) {
    this.$translate = $translate;
    this.$q = $q;
    this.$timeout = $timeout;
  }

  $onInit(){
    this.place = {};
    this.loadCategoryData();
    this.charsDiff = 0;
  }

  loadCategoryData(){
    this.categoryList = ['Home', 'Work', 'Store', 'University'];
    this.$translate(this.categoryList).then(this.translateCategoryData.bind(this));
  }

  translateCategoryData(translations){
    this.categoryList = translations;
  }

  queryPlaceTextSearch (query) {
    var data = this.loadAll();
    var results = true ? data.filter( this.createFilterFor(query) ) : data,
        deferred;
    if (true) {
      deferred = this.$q.defer();
      this.$timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }
  searchPlaceTextChange(text) {
    this.charsDiff++;
    if(this.charsDiff > MIN_CHAR_DIFF){
      //updateMap
    }
  }

  selectedItemChange(item) {
    //updateMap
  }

  loadAll() {
    var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
            Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
            Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
            Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
            North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
            South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
            Wisconsin, Wyoming';
    return allStates.split(/, +/g).map( function (state) {
      return {
        value: state.toLowerCase(),
        display: state
      };
    });
  }

  createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(state) {
      return (state.value.indexOf(lowercaseQuery) === 0);
    };
  }
}

angular.module('milesApp')
  .component('placeform', {
    templateUrl: 'app/place/place-form/place-form.html',
    controller: PlaceFormComponent,
    controllerAs: 'ctrl'
  });

})();
