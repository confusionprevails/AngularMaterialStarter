'use strict';

/**
 * @ngdoc overview
 * @name ngmaterialApp
 * @description
 * # ngmaterialApp
 *
 * Main module of the application.
 */
angular
    .module('ngmaterialApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ngMaterial', 'ui.router', 'ngMdIcons'
    ])
    .config(
    function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {


        /*
         var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
         'contrastDefaultColor': 'light',
         'contrastDarkColors': ['50'],
         '50': 'ffffff'
         });
         $mdThemingProvider.definePalette('customBlue', customBlueMap);
         $mdThemingProvider.theme('default')
         .primaryPalette('customBlue', {
         'default': '500',
         'hue-1': '50'
         })
         .accentPalette('pink');
         $mdThemingProvider.theme('input', 'default')
         .primaryPalette('grey');

         */

        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "views/login.html",
                controller: 'AppCtrl'
            })
            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "views/menu.html",
                controller: 'AppCtrl'
            })
            .state('app.main', {
                url: "/main",
                views: {
                    'menuContent': {
                        templateUrl: "views/main.html",
                        controller: 'MainCtrl'
                    }
                }
            })
            .state('app.about', {
                url: "/about",
                views: {
                    'menuContent': {
                        templateUrl: "views/about.html",
                        controller: 'AboutCtrl'
                    }
                }
            })

        ;

        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/login");


    })
    .controller('AppCtrl', ['$scope', '$mdSidenav', '$location', '$mdDialog', AppCtrl]);


function AppCtrl($scope, $mdSidenav, $location, $mdDialog) {

    $scope.user={};
    var alert;
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };
    $scope.goHome = function () {
        $location.path('/app/main');
    };
    $scope.goAbout = function () {
        $location.path('/app/about');
    }
    $scope.goLogin = function () {
        $location.path('/login');
    }

    $scope.clearUser = function(){
        $scope.user={};
    }

    $scope.login = function(user){
        $scope.user = user;
        if ($scope.loginForm.$valid) {
            showSuccAlert(user);
        }else{
            showAlert();
        }

    }

    function showAlert(){

        alert = $mdDialog.alert()
            .title('Oops!')
            .content('Please provide a valid Email and Password. (This is Sample use any valid email and password!)')
            .ok('Close');
        $mdDialog
            .show( alert )
            .finally(function() {
                alert = undefined;

            });
    }
    function showSuccAlert(user){

        alert = $mdDialog.alert()
            .title('Welcome, ' + user.email)
            .content('Thank you for loggin in!')
            .ok('Close');
        $mdDialog
            .show( alert )
            .finally(function() {
                alert = undefined;
                $scope.goHome();
            });
    }


}