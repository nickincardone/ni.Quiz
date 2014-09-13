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

    $scope.choice = []; 

    $scope.quiz = [
      {
        "question" : "What is the capital of Maine?",
        "choices" : [
          "Atlanta",
          "Frankfort",
          "Augusta",
          "Montgomery"
        ],
        "answer" : "Augusta"
      },
      {
        "question" : "What is the capital of Georgia?",
        "choices" : [
          "Atlanta",
          "Frankfort",
          "Augusta",
          "Montgomery"
        ],
        "answer" : "Atlanta"
      },
      {
        "question" : "What is the capital of Kentucky?",
        "choices" : [
          "Atlanta",
          "Frankfort",
          "Augusta",
          "Montgomery"
        ],
        "answer" : "Frankfort"
      },
      {
        "question" : "What is the capital of Alabama?",
        "choices" : [
          "Atlanta",
          "Frankfort",
          "Augusta",
          "Montgomery"
        ],
        "answer" : "Montgomery"
      }
    ];


      for (var i = 0; i < $scope.quiz.length; i++) {
        $scope.choice[i] = null;
      }


    $scope.currentQuestion = 0;


  }

})(angular);