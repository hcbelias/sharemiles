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
	"i18n": {
		"en": {
			"AddPlace": "Add New Place",
			"ChooseDestination": "Choose your destination",
			"Home": "Home",
			"Management": "Management",
			"MyApp": "My App",
			"Places": "Places",
			"Rides": "Rides"
		}
	}
})

;
})(angular);