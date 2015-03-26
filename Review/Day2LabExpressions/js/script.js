/*
 Gregory Givler
 3/6/15
 Section 00
 Day 2 Lab Expressions
  */

//alert("Day 2 Lab Expressions.")

/*
Slices of Pie 1
 */

//Number of pizza
var pizzas = prompt("How many Pizza's are at your party?");
while (pizzas===""||isNaN(pizzas)){
    pizzas=prompt("Please do not leave blank and only use numbers.\nHow many pizzas are at your party?");
}
//Number of people
var people = prompt("How many people are coming to your party?");
while(people===""||isNaN(people)){
    people=prompt ("Please do not leave blank and only use numbers.\nHow many people are coming to your party?");
}
//Number of slices per pizza
var slices = prompt("How many slices does each pizza have?");
while(slices===""||isNaN(slices)){
    slices=prompt("Please do not leave blank and only use numbers.\nHow many slices does each pizza have?");
}
//Function for finding out slices per person
function slicesPerPerson(pizzas,people,slices){
    var eachPerson=(slices*pizzas)/people;
    return eachPerson;
}
//Variable to catch slicesPerPerson calculation.
var slicesPeople=slicesPerPerson(parseInt(pizzas),parseInt(people),parseInt(slices))
//Adding the slices per person to the text sting
console.log("Each person gets "+slicesPeople+" slices at the party.");

/*
Slice of Pie 2
 */

//Sparky's pieces of pizza
//Added anonymous function
var leftOvers=function(slices,people,pizzas){
    var sparkysLeftovers=(slices*pizzas)%people;
    return sparkysLeftovers;
}
//Variable to catch sparkysLeftOvers
var sparkysSlices=leftOvers(parseInt(slices),parseInt(people),parseInt(pizzas));
//Adding the total number of slices Sparky will get
console.log("Sparky got "+sparkysSlices+" slices of pizza.");

/*
Average Shopping Bill
 */

//Random amount spent per week
//Array for random amount
var weeks=[123,189,220,143,183]
//Amount spent over 5 weeks
var total=weeks[0]+weeks[1]+weeks[2]+weeks[3]+weeks[4];
//Average per week
var average=total/weeks.length;
//Added the total spent over 5 weeks and the average per week
console.log("You have spent a total of $"+total+" on groceries over 5 weeks. That is an average of $"+average+" per week");

/*
Discounts
 */

//Original Price
var oPrice=prompt("Let's find the price of your laptop, plus sales tax, with a discount.\nHow much does your laptop cost?");
while(oPrice===""||isNaN(oPrice)){
    oPrice=prompt("Please do not leave blank and only use numbers.\nHow much does your laptop cost?");
}
//Discount Percentage
var discount=prompt("What is the discount percentage?");
while(discount===""||isNaN(discount)){
    discount=prompt("Please do not leave blank and only use numbers.\nWhat is the discount percentage");
}
//Sales tax
var tax=prompt("What is the salse tax percentage?");
while(tax===""||isNaN(tax)){
    tax=prompt("Please do not leave blank and only use numbers.\nWhat is the sales tax percentage.")
}
//Discounted Item without tax
function reduced1(price,discount){
    var con=discount/100;
    var newPrice=price-(price*con);
    return newPrice
}
//variable to catch newPrice return
var taxOff=reduced1(parseInt(oPrice),parseInt(discount));
//Discounted Item with tax
function reduced2(price,tax,r){
    var con=tax/100;
    var newPrice=(price*con)+r;
    return newPrice;
}
//Variable to catch newPrice return
var taxOn=reduced2(parseInt(oPrice),parseInt(tax),taxOff)
//Added variables to the proper inside the text string.
console.log("Your laptop was originally $"+oPrice+", but after a "+discount+"% discount, it is now $"+taxOff+" without tax, and $"+taxOn+" with tax.");



