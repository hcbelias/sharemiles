'use strict';
(function(){

class PlaceFormComponent {


  constructor($translate, $q, $timeout, PlaceService, $mdToast, $state) {
    this.$translate = $translate;
    this.PlaceService = PlaceService;
    this.$mdToast = $mdToast;
    this.$state = $state;
  }

  $onInit(){
    this.place = {};
    this.loadCategoryData();
    this.address = {};
  }

  loadCategoryData(){
    this.categoryList = ['Home', 'Work', 'Store', 'University'];
    this.$translate(this.categoryList).then(this.translateCategoryData.bind(this));
  }

  translateCategoryData(translations){
    this.categoryList = translations;
  }

  submitPlaceForm(){
    var addressData = this.address.text || this.address.item;

    if(!addressData || !this.place.name){
      return false;
    }

    this.place.address = this.address.text || this.address.item["formatted_address"];
    this.place.lat = this.address.geometry ? this.address.geometry.lat() : 0;
    this.place.lon = this.address.geometry ? this.address.geometry.lon() : 0;
    this.saveData();
  }

  selectPlace(place){
debugger;
  }

  saveData(){
    var toast = this.$mdToast;
    this.PlaceService.createPlace({ place: this.place }).$promise.then(data => {
      toast.show(toast.simple().textContent('Place added successfully!'));
      this.$state.go('place');
    }).catch(function(err){
      console.log(err);
      toast.show(toast.simple().textContent(err.data));
    });
  }


}

angular.module('milesApp')
  .component('placeform', {
    templateUrl: 'app/place/place-form/place-form.html',
    controller: PlaceFormComponent,
    controllerAs: 'ctrl'
  });

})();
