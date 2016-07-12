var mainApplicationModule = angular.module('mean', ['ngRoute','usersang','example','ngResource','chat','articlesang']);

mainApplicationModule.config(['$locationProvider',function($locationProvider) {
	$locationProvider.hashPrefix('!');
}]);

if (window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function() {
	angular.bootstrap(document, ['mean']);
});