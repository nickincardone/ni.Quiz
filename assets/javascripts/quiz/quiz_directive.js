(function(angular) {

  var
  definitions;

  definitions = [
  niQuiz
  ]; 

  angular.module('ni.Quiz').directive('niQuiz', definitions);

  function niQuiz() {

    return {
      require: 'ngModel',
      scope: {
        
      },
      templateUrl: 'niQuiz.html',
      link: quiz
    };

    function quiz(scope, elm, attrs, ctrl) {
      console.log("made it");

    }
  }
}) (angular);