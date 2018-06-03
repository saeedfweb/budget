// budget controller
var budgetController = (function() {
    
  // some code 

})();





var UIController = (function(){
    //حالا سعی می کنیم به عنوان یک ابجکت این ها رو برگردونیم
    //پس


    //02

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        //5
        inputBtn:'.add__btn',

    };
    return {
        //پس این یک متد هست برای انیکه برگردونه برای اینترفیس
        //پس مدل متد می نویسم
        getInput: function(){
            return{
                //01
                //اینجا مشکلی وجود داره که اگر ما در یو ای تغیراتی بدهیم
                //و در صورتی که 
                //بخواهیم تغییری در کلاس نیم ها بدهیم به مشکل برمی خوریم
            type : document.querySelector(DOMstrings.inputType).value,
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : document.querySelector(DOMstrings.inputValue).value,
        };
    //3    
    },
    getDOMstrings: function(){
        return DOMstrings;
    }
    };

})();

var controller = (function(budgetCtrl, UICtrl){

    //4
    var DOM = UICtrl.getDOMstrings();
    var ctrlAddItem = function (){


        var input = UICtrl.getInput();
        console.log(input);
        
                
    }
//ّبرای این دکمه هم مثل2
//اما اینها در یک کلاس نیستند
//پس
//6
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
        }
            
    });

})(budgetController, UIController);
