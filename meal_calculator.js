var readline = require('readline-sync');

//Diner && Dish objects//
var Diner = function(name, lsOfDishes){
    this.name = name;
    if(!lsOfDishes){
        this.dishes = []
    }else{
        this.dishes = lsOfDishes;
    }
};

Diner.prototype.addDish = function(name, price){
    this.dishes.push({
        nameKey : name,
        priceKey : price,
    });
    console.log(name + " added to " + this.name + "'s meal!");
};

Diner.prototype.getTotalPrice = function(){
    var total = 0.00;
    for(var i = 0; i < this.dishes.length; i++){
        total += parseFloat(this.dishes[i].priceKey);
    }
    return total;
};

Diner.prototype.getDishes = function(){
    console.log(this.name + "'s dishes: \n")
    for(var i = 0; i < this.dishes.length; i++){
        console.log(this.dishes[i].nameKey + "\t" + this.dishes[i].priceKey + "\n");
    }
};

Diner.prototype.removeDish = function(name){
    for(var i = 0; i < this.dishes.length; i++){
        if(this.dishes[i].nameKey === name){
            this.dishes.splice(i, 1);
        }
    }
    console.log(name + " removed from " + this.name + "'s list!");
};

var numOfDiners;
var attendees = [];
var newDiner;
var newDish;
var fixedTax = 0.00;
var tipPrct = 0.00;


//Intro text//
console.log("Welcome to the meal calculator node.js app! \n")

//Initial question and process loop//
numOfDiners = readline.question("Begin by entering the number of people joining you for dinner: ");



for(var i = 1; i <= numOfDiners; i++){
    newDiner = new Diner(readline.question("Name for diner " + i + ": "));
    attendees.push(newDiner);
};
    

for(var i = 0; i < attendees.length; i++){
    var nextDiner = false;
    
    while(!nextDiner){
        var dishName = readline.question("Add an item to " + attendees[i].name + "'s menu: \n");
        var dishPrice = readline.question("How much did that cost?\n$");
    
        attendees[i].addDish(dishName, dishPrice);
        nextDiner = readline.keyInYN('Is this it for ' + attendees[i].name + "? \n");
        console.log("\n");
    }
}

fixedTax = readline.question("How much is the tax amount (In %)? ");
console.log("\n");
tipPrct = readline.question("What % would you like to tip? ");
console.log("\n");


if(readline.keyInYN("Would you like to split this bill evenly with everyone?")){
    var grandTotal = 0.00;
    
    for(var i = 0; i < attendees.length; i++){
        console.log();
        var person = attendees[i];
        console.log(person.name + "'s Meal:");
        for(var j = 0; j < person.dishes.length; j++){
            console.log(person.dishes[j].nameKey + "\t $" + person.dishes[j].priceKey);
        }
        //console.log(person.name + " Total: " + attendees[i].getTotalPrice())
        grandTotal += parseFloat(attendees[i].getTotalPrice());       
    }
    var fTaxNum, tipNum;
    fTaxNum = (fixedTax/100) * grandTotal;
    tipNum = (tipPrct/100) * grandTotal;
    
    console.log();
    console.log("Net Total: $" + grandTotal.toFixed(2));
    console.log("Tax Amount (" + fixedTax + "%): $" + fTaxNum.toFixed(2));
    console.log("Tip Amount (" + tipPrct + "%): $" + tipNum.toFixed(2));
    console.log("Grand Total: $" + (grandTotal + fTaxNum + tipNum).toFixed(2));
    console.log("\n");
    console.log("Each person owes: $" + ((grandTotal + fTaxNum + tipNum)/(attendees.length)).toFixed(2));
    
    
}