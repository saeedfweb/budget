// budget controller
var budgetController = (function() {
    
    //1
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //2
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    //3
    // var allExpenses = [];
    // var allIncome = [];
    // var totalExpenses = 0;

//4
    var data = {
            //6
        allItems:{
            exp :[],
            inc:[],
        },
        totals:{
            exp:0,
            inc:0,
        }
        // //5
        // allExpenses = [],
        // allIncome = [],
    }
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
   
    
    var setupEventListeners = function(){
       
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
    
                
    };

 
   return{
       init:function(){
           console.log("aplication starts");
           setupEventListeners();
       }
   };

})(budgetController, UIController);


controller.init();