(function(){
    angular.module("quizApp").controller("QuizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics', 'DataService'];



    function QuizController(quizMetrics, DataService){

        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.DataService = DataService;
        vm.activeQuestion = 0;
        vm.questionAnswered = questionAnswered;
        vm.setActiveQuestion = setActiveQuestion;
        vm.selectAnswer = selectAnswer;
        vm.error = false;
        vm.finalise = false;
        vm.finaliseAnswers = finaliseAnswers;

        function setActiveQuestion(index){
            // no argument passed, data = undefined.
            if(index === undefined){
                var breakOut = false;

                /*
                 * quizLength is set to 1 less than the length of the quiz as it
                 * is always referenced against the variable activeQuestion 
                 * which is 0 index. Therefore the length needs to be one less.
                 */
                var quizLength = DataService.quizQuestions.length - 1;

                /*
                 * This while loop will loop continuously until an unanswered 
                 * question is found. Going back to the first question if the 
                 * last question is reached witout finding an unanswered question
                 */
                while(!breakOut){
                    // check if last question is reach, if not increment. If it
                    // has go back to start.
                    vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;

                    /*
                     * activeQuestion has looped back to start. Meaning user has
                     * skipped past questions without answering them. Therefore
                     * show a warning. This is done by setting the error flag to
                     * true.
                     */
                    if(vm.activeQuestion === 0){
                        vm.error = true;
                    }

                    // if current active question has not been selected, break 
                    // out the while loop
                    if(DataService.quizQuestions[vm.activeQuestion].selected === null){
                        breakOut = true;
                    }
                }
            }else{
                // Data was passed into the function therefore
                // Set activeQuestion to the index of the button pressed
                vm.activeQuestion = index;
            }

        }

        function questionAnswered(){
            var quizLength = DataService.quizQuestions.length;
            
            numQuestionsAnswered = 0;
            //For loop added to loop through all questions and recount questions
            //that have been answered. This avoids infinite loops.
            for(var x = 0; x < quizLength; x++){
                if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
                    numQuestionsAnswered++;
                    if(numQuestionsAnswered >= quizLength){
                        // final check to ensure all questions are actuall answered
                        for(var i = 0; i < quizLength; i++){
                            /*
                             * if find a question that is not answered, set it to 
                             * active question then return from this function 
                             * to ensure finalise flag is not set
                             */
                            if(DataService.quizQuestions[i].selected === null){
                                setActiveQuestion(i);
                                return;
                            }
                        }
                        // set finalise flag and remove any existing warnings
                        vm.error = false;
                        vm.finalise = true;
                        return;
                    }
                }
            }

            /*
             * There are still questions to answer so increment to next 
             * unanswered question using the setActiveQuestion method
             */
            vm.setActiveQuestion();
        }

        function selectAnswer(index){
            DataService.quizQuestions[vm.activeQuestion].selected = index;
        }

        function finaliseAnswers(){
            vm.finalise = false;
            numQuestionsAnswered = 0;
            vm.activeQuestion = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState("quiz", false);
            quizMetrics.changeState("results", true);
        }
        
    }
})();