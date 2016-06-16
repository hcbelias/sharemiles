'use strict';

exports = module.exports = {
  // List of user roles
  userRoles: ['guest', 'user', 'admin'],
  googleMapsAPIKey: process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyD_tAZDpNLnmRWtGv1xBTquyFrrKj--HP0',
  googleMapsLink: 'https://maps.googleapis.com/maps/api/js?key=',
  i18n: {
    en:{
      AddPlace: 'Add New Place',
      ChooseDestination: 'Choose your destination',
      Home: 'Home',
      Management: 'Management',
      MyApp: 'My App',
      Places: 'Places',
      Rides: 'Rides'
    }
  }
};
