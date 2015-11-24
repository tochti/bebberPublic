'use strict';

var app = angular.module('bebber', [
  'ngRoute',
  'appDirectives',
  'appCtrl',
  'appFilters',
]);


app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/searchResult/:docName', {
        templateUrl: '/public/angular-tpls/singleView.html',
        controller: 'singleViewCtrl'
      }).when('/newDocs', {
        templateUrl: '/public/angular-tpls/searchView.html',
        controller: 'newDocsCtrl',
      }).when('/login', {
        templateUrl: '/public/angular-tpls/login.html',
        controller: 'loginCtrl'
      }).otherwise('/login');
  }
]);
