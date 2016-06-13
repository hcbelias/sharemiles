'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {
      state : 'main',
      title: 'Rides',
      icon: 'dashboard'
    },
//    {
  //    state : '',
    //  title: 'Friends',
//      icon: 'group'
  //  },
    {
      state : 'place',
      title: 'Places',
      icon: 'place'
    }

  ];

  admin = [
    {
      state : '',
      title: 'Settings',
      icon: 'settings'
    }
  ];
  //end-non-standard

  constructor(Auth, $mdSidenav, $state) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.$mdSidenav = $mdSidenav;
    this.currentUser = Auth.getCurrentUser();
    this.$state = $state;
  }

  openLink(link){
    this.$state.go(link);
  }

}

angular.module('milesApp')
  .controller('NavbarController', NavbarController);
