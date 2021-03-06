(function(){
    angular.module("quizApp").controller("resultsCtrl", ResultsController);

    ResultsController.$inject = ["quizMetrics","DataService"]

    function ResultsController(quizMetrics, DataService){
        var vm = this;
        vm.quizMetrics = quizMetrics;
        vm.DataService = DataService;
        vm.activeQuestion = 0;
        vm.getAnswerClass = getAnswerClass;
        vm.setActiveQuestion =  setActiveQuestion;
        vm.calculatePerc = calculatePerc;
        vm.restart = restart;

        function calculatePerc(){
            return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;
        }

        function setActiveQuestion(index){
            vm.activeQuestion = index;
        }

        function getAnswerClass(index){
            if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
                return "correct_answer";
              }else if(index === DataService.quizQuestions[vm.activeQuestion].selected){
                return "wrong_answer";
              }
        }
        function restart(){
            quizMetrics.changeState("results",false);
            quizMetrics.numCorrect = 0;

            for(var i = 0; i < DataService.quizQuestions.length; i++){
                var data = DataService.quizQuestions[i]; //binding the current question to data to keep code clean
            
                data.selected = null;
                data.correct = null;
              }
        }
    }
}
)();