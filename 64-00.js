// budget controller
var budgetController = (function() {
    
  // some code 

})();





var UIController = (function(){


    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
     
        inputBtn:'.add__btn',

    };
    return {

        getInput: function(){
            return{
      type : document.querySelector(DOMstrings.inputType).value,
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : document.querySelector(DOMstrings.inputValue).value,
        };
      
    },
    getDOMstrings: function(){
        return DOMstrings;
    }
    };

})();

var controller = (function(budgetCtrl, UICtrl){
   
    //1
    var setupEventListeners = function(){
        //2
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if (event.keyCode === 13 || event.which === 13) {
                    ctrlAddItem();
            }
                
        });
    }

    
    var ctrlAddItem = function (){


        var input = UICtrl.getInput();
        //4
        //console.log(input);
        
                
    };

   //3
   return{
       init:function(){
           console.log("aplication starts");
           setupEventListeners();
       }
   };

})(budgetController, UIController);


controller.init();