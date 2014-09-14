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
      //start quiz on first question
      scope.currentQuestion = 0;

      //init user choice array to null to test for missing answer later
      scope.choice = [];
      for (var i = 0; i < scope.quiz.length; i++) {
        scope.choice[i] = null;

        scope.quiz[i].choices = shuffle(scope.quiz[i].choices);
      }

      scope.random = [];

      //tracks if quiz is complete
      scope.quizDone = false;

      //tracks if all questions are answered
      scope.quizAnswered = function() {
        for (var i = 0; i < scope.choice.length; i++) {
          if (scope.choice[i] == null) {
            return false;
          }
        }
        return true;
      }

      scope.checkQuiz = function() {
        for (var i = 0; i < scope.choice.length; i++) {
          if (scope.choice[i] == null) {
            scope.quizAnswered = false;
            return;
          }
        }
        scope.quizAnswered = true;
      }

      scope.next = function() {
        scope.currentQuestion++;

      }

      scope.previous = function() {
        scope.currentQuestion--;
      }

      scope.submitQuiz = function() {
        scope.quizDone = true;
      }

      scope.retryQuiz = function() {
        scope.quizDone = false;
      }

      function shuffle(o) { 
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
      };

    }
  }
})(angular);