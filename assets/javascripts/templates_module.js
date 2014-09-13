angular.module('ni.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('header.html',
    "<div class=\"navbar navbar-default navbar-static-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Nick Incardone's Quiz App</a></div></div></div>"
  );


  $templateCache.put('quiz.html',
    "<div id=\"example\" class=\"container content-container\"><div class=\"jumbotron\"><h1>ni.Quiz</h1><p class=\"lead\">Quiz App designed in angular.js</p><a class=\"btn\" href=\"https://github.com/nickincardone/ni.Quiz\">Site's Code on GitHub</a></div><div class=\"row\"><div class=\"col-sm-4 col-sm-offset-4 col-xs-12\"><div class=\"quiz-applet\"><form><h4>{{quiz[currentQuestion].question}}</h4><div class=\"choices\" ng-repeat=\"response in quiz[currentQuestion].choices\"><input type=\"radio\" ng-model=\"$parent.choice[currentQuestion]\" ng-value=\"response\"> {{response}}<br></div><div class=\"row\"><div class=\"col-xs-4\"><button ng-disabled=\"currentQuestion == 0\" ng-click=\"currentQuestion = currentQuestion-1\">Previous</button></div><div class=\"col-xs-4\"><button ng-show=\"currentQuestion == quiz.length-1\">Submit</button></div><div class=\"col-xs-4\"><button ng-disabled=\"currentQuestion == quiz.length-1\" ng-click=\"currentQuestion = currentQuestion+1\">Next</button></div></div></form><p>Current answer: {{choice[currentQuestion]}}</p><p>Answers for entire quiz: {{choice | json}}</p>{{quizDone}}</div></div></div></div>"
  );

}]);
