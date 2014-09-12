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
        "wrongChoices" : [
          "one",
          "three",
          "four"
        ],
        "answer" : "two"
      },
      {
        "question" : "The answer to this question is three?",
        "wrongChoices" : [
          "one",
          "two",
          "four"
        ],
        "answer" : "three"
      },
      {
        "question" : "The answer to this question is one?",
        "wrongChoices" : [
          "two",
          "three",
          "four"
        ],
        "answer" : "one"
      },
      {
        "question" : "The answer to this question is four?",
        "wrongChoices" : [
          "one",
          "two",
          "three"
        ],
        "answer" : "four"
      }
    ];

  }

})(angular);