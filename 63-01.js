// budget controller
var budgetController = (function() {
    
  // some code 

})();





var UIController = (function(){
    //حالا سعی می کنیم به عنوان یک ابجکت این ها رو برگردونیم
    //پس

    return {
        //پس این یک متد هست برای انیکه برگردونه برای اینترفیس
        //پس مدل متد می نویسم
        getInput: function(){
            return{
            type : document.querySelector('.add__type').value,
            description : document.querySelector('.add__description').value,
            value : document.querySelector('.add__value').value,
        }}
    };

})();

var controller = (function(budgetCtrl, UICtrl){

    
    var ctrlAddItem = function (){


        var input = UICtrl.getInput();
        console.log(input);
        
                
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
        }
            
    });

})(budgetController, UIController);
