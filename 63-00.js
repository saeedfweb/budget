// budget controller
var budgetController = (function() {
    
  // some code 

})();





var UIController = (function(){
    
    return {
        getinput: function(){
            var type = document.querySelector('.add__type').value;
            var description = document.querySelector('.add__description').value;
            var value = document.querySelector('.add__value').value;
        }
    };

})();

var controller = (function(budgetCtrl, UICtrl){

        var ctrlAddItem = function (){
                console.log('test');
                
        }

        document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
            
        });

})(budgetController, UIController);
