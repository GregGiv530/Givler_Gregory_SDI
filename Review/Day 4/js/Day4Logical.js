/*
 Gregory Givler
 3/10/2015
 Section 00
 Day 4 Logical
 */


//alert("Hello!");

//Basic conditional, if we have enough money to buy a car

//Create a few variables
var budget=prompt("Let's see if you have enough cash to buy a car.\nWhat is your budget for the car?");
while (budget===""||isNaN(budget)){
    budget=prompt("Please do not leave blank and only use numbers.\nWhat is your budget for the car?");
}
var carPrice=prompt("How much does the car cost?");
while (carPrice===""||isNaN(carPrice)){
    carPrice=prompt("Please do not leave blank and only use numbers.\nHow much does the car cost?");
}
var payCheck=prompt("How much is your paycheck?");
while (payCheck===""||isNaN(payCheck)){
    payCheck=prompt("Please do not leave blank and only use numbers.\nHow much is your paycheck?");
}
var cashAmount=function(b,p){
    var amount=b+p;
    return amount;
}
var totalCash=cashAmount(Number(budget),Number(payCheck));
console.log(totalCash);
if (budget>=carPrice){
    console.log("Your budget is already high enough to buy the car you want!");
} else if(totalCash>=Number(carPrice)){
    console.log("With the help of your paycheck you can buy the car!");
} else{
    console.log("Sorry you are to broke to buy the car.")
}

/*
if(budget>=carPrice){
    console.log("You can afford your car!");
} else{
    console.log("You are broke! Take the bus!");
}


//We can buy the car if our budget is greater than or equal to the car price or our paycheck is more than 1500.

if(budget>=carPrice||payCheck>1500){
    console.log("You can buy the car!");
} else{
    console.log("You don't make enough money and your budget is to low.");
}

/*
True Table for || "or"
t || t = t
t || f = t
f || t = t
f || f = f
 */

/*
True Table && "and"
t && t = t
t && f = f
f && t = f
f && f = f
 */

//You can buy a car if the budget is greater than or equal to the car price AND your paycheck is over 1500
/*
if(budget>=carPrice&&payCheck>1500){
    console.log("You can buy the car!");
} else{
    console.log("Pick a cheaper car or find a better job!");
}
*/