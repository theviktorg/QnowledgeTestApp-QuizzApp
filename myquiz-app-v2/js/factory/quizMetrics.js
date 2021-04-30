(function(){
    angular.module("quizApp").factory("quizMetrics", QuizMetrics);

    QuizMetrics.$inject = ["DataService"]
    function QuizMetrics(DataService){
        var quizObj = {
            quizActive : false,
            resultsActive : false,
            changeState : changeState,  
            markQuiz : markQuiz,
            correctAnswers : [],
            numCorrect: 0
        };
        return quizObj;

        //schimba modul aplicatiei : testarea cunostintelor si rezultatul testului
        function changeState(metric, state){ 
            if(metric === "quiz"){
                quizObj.quizActive = state; 
            } else if (metric === "results"){
                quizObj.resultsActive = state;
            } else {
                return false;
            }   
        }
        //marcam raspunsurile date de utilizator cu cele indicate ca fiind corecte
        function markQuiz(){
            quizObj.correctAnswers = DataService.correctAnswers;

            for(var i = 0; i < DataService.quizQuestions.length; i++){
                if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
                DataService.quizQuestions[i].correct = true;
                quizObj.numCorrect++;
                }else{
                DataService.quizQuestions[i].correct = false;
                }
            }
        }
    }
})();