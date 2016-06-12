(function(angular, undefined) {
  angular.module("milesApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	],
	"googleMapsAPIKey": "AIzaSyD_tAZDpNLnmRWtGv1xBTquyFrrKj--HP0",
	"googleMapsLink": "https://maps.googleapis.com/maps/api/js?key="
})

;
})(angular);