(function(angular, undefined) {
  angular.module("milesApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	],
	"googleMapsAPIKey": "AIzaSyD_tAZDpNLnmRWtGv1xBTquyFrrKj--HP0",
	"googleMapsLink": "https://maps.googleapis.com/maps/api/js?key=",
	"placeCategoryList": [
		"Home",
		"Work",
		"Store",
		"University",
		"Unknow"
	],
	"i18n": {
		"en": {
			"Address": "Adress",
			"AddPlace": "Add New Place",
			"Category": "Category",
			"ChooseDestination": "Choose your destination",
			"Home": "Home",
			"Management": "Management",
			"Name": "Name",
			"MyApp": "My App",
			"MyPlaces": "My Places",
			"MyRides": "My Rides",
			"Places": "Places",
			"Rides": "Rides",
			"Search": "Search",
			"Settings": "Settings",
			"ShareRide": "Share a ride!"
		}
	}
})

;
})(angular);