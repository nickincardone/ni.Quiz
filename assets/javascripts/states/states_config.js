(function (angular) {
  var
  definition;

  definition = [
  '$stateProvider',
  '$urlRouterProvider',
  statesConfig
  ];

  angular.module('ni.States')
  .config(definition);

  function statesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
    .otherwise('/');

    $stateProvider
    .state('example',  {
      url: '/',
      views: {
        '': { 
          templateUrl: 'demo.html',
          controller: 'quizController'
        },
        'header': {
          templateUrl: 'header.html'
        }
      }
    });


    
  }


})(angular);
