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
    //3
    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(cur){
            //4
            //sum = sum + cur.value;
            //5
            sum += cur.value;

        }); 
        //6
        data.totals[type] = sum;
    };
    
    var data = {
           
        allItems:{
            exp :[],
            inc:[],
        },
        totals:{
            exp:0,
            inc:0,
        },
        //8
        budget :0,
        //10
        //مقدار -1 یعنی که وجود ندارد
        percentage:-1,
       
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
            // 1-  محاسبه مجموع و درصد
        calculateBudget: function(){
            //2-چون پرایویت می خوایم میریم بالا اینو می نویسیم

            // محاسبه مجموع مبالغ

               //7
               calculateTotal('exp');
               calculateTotal('inc');

            // محاسبه بودجه

            //9 
            data.budget = data.totals.inc - data.totals.exp;

            // محاسبه درصد

            //11
            //math.round برای روند کردن
            //15
            if (data.totals.inc >0 ){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else{
                data.percentage = -1;
            }
            

        },

        //12
        getBudget:function(){
            return{
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp:data.totals.exp,
                percentage: data.percentage,
            }
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
                //string to number = parsfloat
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
        
        //12.
        budgetCtrl.calculateBudget();

        //2. return the budget

        //13

        var budget = budgetCtrl.getBudget();
        //3. display the budget on the UI

        console.log(budget);

    };

    var ctrlAddItem = function (){
        var input, newItem;

        //1. get the field input data
        input = UICtrl.getInput();

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