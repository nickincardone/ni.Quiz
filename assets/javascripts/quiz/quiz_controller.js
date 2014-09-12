(function(angular) {

  var
    definitions;

  definitions = [
    '$scope',
    quizController
  ];

  angular.module('ni.Quiz')
    .controller('quizController', definitions);

  function quizController($scope) {



    $scope.quiz = [
      {
        "question" : "The answer to this question is two?",
        "choices" : [
          "one",
          "two",
          "three",
          "four"
        ],
        "answer" : "two"
      },
      {
        "question" : "The answer to this question is three?",
        "choices" : [
          "one",
          "two",
          "three",
          "four"
        ],
        "answer" : "three"
      },
      {
        "question" : "The answer to this question is one?",
        "choices" : [
          "one",
          "two",
          "three",
          "four"
        ],
        "answer" : "one"
      },
      {
        "question" : "The answer to this question is four?",
        "choices" : [
          "one",
          "two",
          "three",
          "four"
        ],
        "answer" : "four"
      }
    ];

    $scope.currentQuestion = 0;

  }

})(angular);