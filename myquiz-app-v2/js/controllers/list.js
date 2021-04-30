(function(){
    angular.module("quizApp").controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics', 'DataService']
    function ListController(quizMetrics, DataService){
        var vm = this;
        vm.data = [];
        vm.quizMetrics = quizMetrics;

        DataService.quizData().then(function(response) {
            vm.data = response.data;
            console.log("file found");
        }, function(response) {
            console.log('error', response.status);
        });
        
        vm.search = "";
        vm.activateQuiz = activateQuiz;

        function activateQuiz(){
            quizMetrics.changeState("quiz",true);
        };
        


        //actualizam modal window in dependenta de componenta aleasa (negand necesitatea sa cream pentru fiecarea componenta fereastra modal in parte) 
        vm.activeComponent = {};
        vm.changeActiveComponent = changeActiveComponent; 
        function changeActiveComponent (index){ 
            vm.activeComponent = index;
        }
        

    }

}

)();