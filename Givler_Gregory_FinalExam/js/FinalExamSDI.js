/*
 Gregory Givler
 3/28/2015
 Section 00
 Final Exam
 */

//alert("Hello!");

//Prompt for user input for cost of an item
var userInput=prompt("Let's find out how much a discount on your item will save you.\nWhat is the price of your item?");
//Validation
while(userInput===""||isNaN(userInput)){
    userInput=prompt("Please do not leave blank and only use numbers.\nWhat is the price of your item?");
}
//Prompt for discount amount
var discount=prompt("What is the percentage of the discount?");
while(discount<0||discount>100||discount===""||isNaN(discount)){
    discount=prompt("Please do not leave blank and only use numbers between 0 and 100.\nWhat is the percentage of the discount?");
}
//Function to calculate the amount of the discount
function discountItem(c,d){
    var discount=c*(d/100);
    var newPrice=c-discount;
    return newPrice;
}
//Variable to catch the function return
var discountedPrice=discountItem(userInput,discount);
//Console.log results
console.log("The final cost of an item that costs $"+userInput+" with a discount of "+discount+"% is $"+discountedPrice+".");

/*
Test value #1 - I entered 1000 for the cost of the item and 40 for the percent amount and got the answer of 600.

Test value #2 - I entered 500 for the cost of the item and 5 for the percent amount and got the answer of 475.
 */
