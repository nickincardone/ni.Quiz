angular.module('ni.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('header.html',
    "<div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"container\" style=\"background-color: #f8f8f8\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Nick Incardone</a></div><!--/.nav-collapse --></div></div>"
  );


  $templateCache.put('quiz.html',
    "<div id=\"example\" class=\"container\"><div class=\"row\"><div class=\"col-xs-12\"><br><br><br><div class=\"quiz-applet\"><h4>{{quiz[currentQuestion].question}}</h4><div ng-repeat=\"response in quiz[currentQuestion].choices\">{{response}}</div><button ng-disabled=\"currentQuestion == 0\" ng-click=\"currentQuestion=currentQuestion-1\">Previous</button> <button ng-disabled=\"currentQuestion == quiz.length\" ng-click=\"currentQuestion=currentQuestion+1\">Next</button></div></div></div></div>"
  );

}]);
