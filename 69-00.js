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
        },
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
                //3-1
                //به صورت استرینگ بر می گردد
                //3-2
                //parsfloat
            value : parseFloat(document.querySelector(DOMstrings.inputValue).value),
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


    clearFields: function(){
        
        var fields, filedsArr;

        fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

        filedsArr = Array.prototype.slice.call(fields);

        filedsArr.forEach(function(current, index, array ){
            current.value = "";
        });
        // برگشتن کرسل کیبرد به خانه اول
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

    //1
    var updateBadget = function(){
        
        //1. calcualte the budget

        //2. return the budget

        //3. display the budget on the UI


    };

    var ctrlAddItem = function (){
        var input, newItem;

        //1. get the field input data
        input = UICtrl.getInput();

        //4  خالی را چک کند
        //4-1 nan یعنی نات ا نامبر
        //4-2  پس از 
        //4-3 isNan()
        if (input.description !== "" && !isNaN(input.value) && input.value>0){ 

        //2. add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. add the item to the UI
        UICtrl.addListItem(newItem, input.type);

        //clear the filed
        UICtrl.clearFields();

        //2
        // 4 . calculate and update budget
        updateBadget();

        }
    };

 
   return{
       init:function(){
           console.log("aplication starts");
           setupEventListeners();
       }
   };

})(budgetController, UIController);


controller.init();