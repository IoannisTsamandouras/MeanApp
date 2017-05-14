'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SongViewCtrl
 * @description
 * # SongViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('SongViewCtrl', function (
  $scope,
  $routeParams,
  Song
  ) {
  $scope.viewSong = true;
  $scope.song = Song.one($routeParams.id).get().$object;
});
