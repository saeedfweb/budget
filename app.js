// budget controller
var budgetController = (function() {
    
    // some code 
  
  })();
  
  var UIController = (function(){
  
      var DOMstrings = {
          inputType: '.add__type',
          inputDescription: '.add__description',
          inputValue: '.add__value',
          addBtn: '.add__btn',
      };
  
      return {
          getInput : function(){
              return{
                  type: document.querySelector(DOMstrings.inputType).value,
                  description: document.querySelector(DOMstrings.inputDescription).value,
                  value: document.querySelector(DOMstrings.inputValue).value,
              }
          getDOMstring = function(){
              return DOMstrings();
          }
      }
  }})();
  
  var controller = (function(budgetCtrl, UICtrl){

      var DOM = UICtrl.getDOMstring;
  
          var ctrlAddItem = function (){
                  var input = UICtrl.getInput();
                  console.log(input);
                  
                  
          }
  
          document.querySelector(DOM.addBtn).addEventListener('click', ctrlAddItem);
  
          document.addEventListener('keypress', function(event){
              if (event.keyCode === 13 || event.which === 13) {
                  ctrlAddItem();
              }
              
          });
  
  })(budgetController, UIController);
  