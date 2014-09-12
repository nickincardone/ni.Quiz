angular.module('ni.Templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('header.html',
    "<div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"container\" style=\"background-color: #f8f8f8\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\">Nick Incardone</a></div><!--/.nav-collapse --></div></div>"
  );


  $templateCache.put('quiz.html',
    "<div id=\"example\" class=\"container\"><div class=\"row\"><div class=\"col-xs-12\"><br><br><br><br><div ng-repeat=\"question in quiz\"><div><h4>{{question.question}}</h4><div ng-repeat=\"response in question.wrongChoices\">{{response}}</div><div>{{question.answer}}</div></div></div></div></div></div>"
  );

}]);
