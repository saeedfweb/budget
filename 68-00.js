// budget controller
var budgetController = (function() {
    
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var data = {
           
        allItems:{
            exp :[],
            inc:[],
        },
        totals:{
            exp:0,
            inc:0,
        }
       
    };

    return {
        addItem: function(type, des, val) {
            
            var newItem , ID;
            
            if (data.allItems[type].length > 0){
            ID = data.allItems[type][data.allItems[type].length - 1].id +1;
            }else{
                ID=0;
            }
            
            if (type === 'exp'){
            newItem = new Expense(ID, des, val);
            } else if (type === 'inc'){
            newItem = new Income(ID, des, val);
            }

            
            data.allItems[type].push(newItem);
            
            return newItem;
        }

        ,
        testting: function(){
            console.log(data);
            
        }
    };


})();


var UIController = (function(){


    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn:'.add__btn',
        incomeContainer:'.income__list',
        expensesContainer:'.expenses__list',

    };
    return {

        getInput: function(){
            return{
            type : document.querySelector(DOMstrings.inputType).value,
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : document.querySelector(DOMstrings.inputValue).value,
        };
      
    },
    addListItem: function(obj, type){
    var html, newHtml, element;
        if (type === 'inc'){
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        } else if (type ==='exp'){
        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }
        newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', obj.value);
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },

    //1
    clearFields: function(){
        
        var fields, filedsArr;

        fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

        //2
        filedsArr = Array.prototype.slice.call(fields);

        //3
        filedsArr.forEach(function(current, index, array ){
            current.value = "";
        });

        //5
        //برای اینکه کرسر ماوس به خانه اول بازگردد
        filedsArr[0].focus();
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
        var input, newItem;

        //1. get the field input data
        input = UICtrl.getInput();

        //2. add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. add the item to the UI
        UICtrl.addListItem(newItem, input.type);

        //4 clear the filed
        UICtrl.clearFields();

        //4. calcualte the budget

        //5. display the budget on the UI


    };

 
   return{
       init:function(){
           console.log("aplication starts");
           setupEventListeners();
       }
   };

})(budgetController, UIController);


controller.init();