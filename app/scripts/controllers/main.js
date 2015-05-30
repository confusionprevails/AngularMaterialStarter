'use strict';

/**
 * @ngdoc function
 * @name ngmaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngmaterialApp
 */
angular.module('ngmaterialApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
        {title:'HTML5 Boilerplate', description:'HTML5 Boilerplate dude!'},
        {title:'AngularJS', description:'AngularJS is a toolset for building the framework most suited to your application development.'},
        {title:'Angular Material', description:'The Angular Material project is an implementation of Material Design in Angular.js'},
        {title:'Karma', description:'Spectacular Test Runner for JavaScript.'}

    ];
  });
