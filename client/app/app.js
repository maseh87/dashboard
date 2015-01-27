angular.module('app', [
  'ui.router',
  'lumx',
  'ngMaterial',
  'app.main'
])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController'
    });
  $urlRouterProvider.otherwise('/');
});