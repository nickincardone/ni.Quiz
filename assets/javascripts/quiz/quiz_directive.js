(function(angular) {

  var
  definitions;

  definitions = [
  niQuiz
  ]; 

  angular.module('ni.Quiz').directive('niQuiz', definitions);

  function niQuiz() {

    return {
      transclude: true,
      scope: {
        quiz: '=niQuiz'
      },
      templateUrl: 'quiz.html',
      link: createQuiz
    };

    function createQuiz(scope, elm, attrs) {
      scope.currentQuestion = 0;
      scope.choice = [];
      for (var i = 0; i < scope.quiz.length; i++) {
        scope.choice[i] = null;
      }


    }
  }
}) (angular);