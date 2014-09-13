angular.module('ni.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('header.html',
    "<div class=\"navbar navbar-default navbar-static-top\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Nick Incardone's Quiz App</a></div></div></div>"
  );


  $templateCache.put('demo.html',
    "<div id=\"example\" class=\"container content-container\"><div class=\"jumbotron\"><h1>ni.Quiz</h1><p class=\"lead\">Quiz App designed in angular.js</p><a class=\"btn\" href=\"https://github.com/nickincardone/ni.Quiz\">Site's Code on GitHub</a></div><div class=\"row\"><div class=\"col-sm-4 col-sm-offset-4 col-xs-12\"><div ng-model=\"quiz\" ni-quiz=\"quiz\"></div></div></div></div>"
  );


  $templateCache.put('quiz.html',
    "<div ng-hide=\"quizDone\" class=\"quiz-applet\"><form><h4>{{quiz[currentQuestion].question}}</h4><div class=\"choices\" ng-repeat=\"response in quiz[currentQuestion].choices\"><input type=\"radio\" ng-model=\"$parent.choice[currentQuestion]\" ng-value=\"response\"> {{response}}<br></div><div class=\"row\"><div class=\"col-xs-4\"><button ng-disabled=\"currentQuestion == 0\" ng-click=\"currentQuestion = currentQuestion-1\">Previous</button></div><div class=\"col-xs-4\"><button ng-show=\"currentQuestion == quiz.length-1\" ng-click=\"quizDone = true\">Submit</button></div><div class=\"col-xs-4\"><button ng-disabled=\"currentQuestion == quiz.length-1\" ng-click=\"currentQuestion = currentQuestion+1\">Next</button></div></div></form><p>Current answer: {{choice[currentQuestion]}}</p><p>Answers for entire quiz: {{choice | json}}</p></div><div ng-show=\"quizDone\"><div ng-repeat=\"answer in choice track by $index\"><p>Question {{$index + 1}}: <span ng-show=\"choice[$index] == quiz[$index].answer\">correct</span> <span ng-hide=\"choice[$index] == quiz[$index].answer\">incorrect, Correct Answer: {{quiz[$index].answer}}</span></p></div><center><button ng-click=\"quizDone = false\">Retry Quiz</button></center></div>"
  );

}]);
