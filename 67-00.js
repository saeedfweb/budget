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
        //6
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
    //1
    addListItem: function(obj, type){

        //3
        //4
        //8
        var html, newHtml, element;

        // create html string place holder 
        //حالا در صفحه ای خودمان جایی که می خواهیم اطلاعات
        //را نمایش بدهیم ایجاد می کنیم
        //اما به صورت مخفی
        //حالا کل آن را کپی پیست می کنیم همینجا
        //2
        if (type === 'inc'){
            //7
            element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        } else if (type ==='exp'){
            //9
            element = DOMstrings.expensesContainer;
        //3
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }
        // replace the place holder
        //5
        newHtml = html.replace('%id%', obj.id);
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', obj.value);
        
        //insert the html to DOM

        //10
        document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);


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

    // 1  از اینجا می خواند
    var ctrlAddItem = function (){
        var input, newItem;
        input = UICtrl.getInput();
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        UICtrl.addListItem(newItem, input.type);
    };

 
   return{
       init:function(){
           console.log("aplication starts");
           setupEventListeners();
       }
   };

})(budgetController, UIController);


controller.init();