var UIController = (function(){

})
var budgetController = (function(){

})
var controller = function(budgetCtrl, UICtrl){

    var addCtrl = function(){
        console.log('test addctrl');    
    }

    document.querySelector('.add__btn').addEventListener('click', addCtrl)
    document.addEventListener('keypress', function(event){
        if (event.keyCode ===13 || event.which === 13) {
            addCtrl();
        }
    })

    }(UIController,budgetController);