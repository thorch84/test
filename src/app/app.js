angular.module('pstApp', [
    'appLoader',
    'header.module',
    'footer.module',
    'pstApp.config',
    'urlAestheticServiceApp',
    'webl',
    'ngAnimate',
    'ui.bootstrap',
    'ngRoute',
    'ngMaterial',
    'templates-app',
    'templates-components',
    'labelWidget',
    'data',
    'LocalStorageModule',
    'rzModule',
    'angularRate'
])

    .config(function myAppConfig($routeProvider) {
    $routeProvider
      .when('/plan-detail/:planId', {
        templateUrl: 'routes/plandetail/plandetail.tpl.html',
        controller: 'planDetailCtrl',
        resolve: {
          appLoader:  ['appLoader', function(appLoader){
                        // $http returns a promise for the url data
                        return appLoader.load();
                    }]
        }
      })

      .when('/compare-plans', {
        templateUrl: 'routes/compareplans/compareplans.tpl.html',
        controller: 'comparePlansCtrl',
        resolve: {
          appLoader:  ['appLoader', function(appLoader){
                        // $http returns a promise for the url data
                        return appLoader.load();
                    }]
        }
      })

      .when('/plans', {
        templateUrl: 'routes/plans/plans.tpl.html',
        controller: 'plansCtrl',
        resolve: {
          appLoader:  ['appLoader', function(appLoader){
                        // $http returns a promise for the url data
                        return appLoader.load();
                    }]
        }
      })

      .otherwise('/plans');
    })
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setStorageType('sessionStorage');
    })

    .run(function run() {
    })
  ;

