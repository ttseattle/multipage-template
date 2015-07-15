var myApp = angular.module('myApp', ['ngRoute'])
// Config route provider
.config(function($routeProvider) {
	$routeProvider
    	.when('/', {
      		templateUrl: 'templates/landing.html',
      		controller: 'LandingController',
    	})
   		.when('/content/', {
    		templateUrl: 'templates/content.html',
    		controller: 'ContentController',
  		})
   		.when('/about/', {
    		templateUrl: 'templates/about.html',
    		controller: 'AboutController',
  		})
})
// Adding Controllers
// Landing page controller
.controller('LandingController', function($scope){
  $scope.number = 10
})

// About page controller
.controller('AboutController', function($scope){
  $scope.about = "Here's some information about this page."
})

// Content controller
.controller('ContentController', function($scope){
})