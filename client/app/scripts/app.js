'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular
    RestangularProvider.setBaseUrl('http://localhost:3000'); 

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/songs', {
        templateUrl: 'views/songs.html',
        controller: 'SongsCtrl'
      })
      .when('/create/song', {
        templateUrl: 'views/song-add.html',
        controller: 'SongAddCtrl'
      })
      .when('/song/:id', {
        templateUrl: 'views/song-view.html',
        controller: 'SongViewCtrl'
      })
      .when('/song/:id/edit', {
        templateUrl: 'views/song-edit.html',
        controller: 'SongEditCtrl'
      })
      .when('/song/:id/delete', {
        templateUrl: 'views/song-delete.html',
        controller: 'SongDeleteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('SongRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Song', function(SongRestangular) {
    return SongRestangular.service('song');
  })
  .directive('youtube', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    };
  })
  .filter('trusted', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  });

