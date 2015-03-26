/*
 Gregory Givler
 3/24/2015
 Section 00
 Functions Assignment
 */

//alert("Hello!");

//Calculator for how much a custom skateboard would cost with a discount on the purchase.

//Prompt for user input for cost of board
var board=prompt("Let's find out how much it would cost to get a custom skateboard, with a store discount.\nHow much does your board cost?");
//While loop for validation
while(board===""||isNaN(board)){
    board=prompt("Please do not leave blank and only use numbers.\nHow much does your board cost?");
}
//parseInt for user input
board=parseInt(board);

//Prompt for user input for cost of trucks
var trucks=prompt("How much do your trucks cost?");
//While loop for validation
while(trucks===""||isNaN(trucks)){
    trucks=prompt("Please do not leave blank and only use numbers.\nHow much do your trucks cost?");
}
//parseInt for user input
trucks=parseInt(trucks);

//Prompt for user input for cost of trucks
var bearings=prompt("How much do your bearings cost?");
//While loop for validation
while(bearings===""||isNaN(bearings)){
    bearings=prompt("Please do not leave blank and only use numbers.\nHow much do your bearings cost?");
}
//parseInt for user input
bearings=parseInt(bearings);

//Prompt for user input for cost of trucks
var wheels=prompt("How much do your wheels cost?");
//While loop for validation
while(wheels===""||isNaN(wheels)){
    wheels=prompt("Please do not leave blank and only use numbers.\nHow much do your wheels cost?");
}
//parseInt for user input
wheels=parseInt(wheels);

//Function to add cost of board and trucks
function costSf(board,trucks,bearings,wheels){
    var i=board+trucks+bearings+wheels;
    return i;
}

//Variable to catch the total cost of the skateboard
var totalCost=costSf(board,trucks,bearings,wheels);

//Prompt for discount
var discount=prompt("What is the percentage of your discount?");
//Validation loop for discount
while(discount===""||isNaN(discount)){
    discount=prompt("Please do not leave blank and only enter numbers.\nWhat is the percentage of your Discount?");
}
//parseInt for user input
discount=parseInt(discount);

//Anonymous Function for discount
var percentCon=function(discount){
    var conversion=discount/100;
    return conversion;
};
//Variable to catch the Anonymous Function's return value
var disPercent=percentCon(discount);

//Variable to calculate the amount of the discount
var totalDis=totalCost*disPercent;

//Variable to apply the discount to the total cost
var totalTotal=totalCost-totalDis;

//Console.log for output for all user input
console.log("You said your board would cost $"+board+", your trucks would cost $"+trucks+", your bearings would cost $"+bearings+", and your wheels would cost $"+wheels+".\nBringing the total cost to $"+totalCost+". Then with the discount of "+discount+"% the cost of your custom skateboard would be $"+totalTotal+".");

/*
Test value #1 - I entered 100 for the board, 80 for the trucks, 50 for the bearings and 65 for the wheels. This total equaled 295. Then I entered 20 for the discount and subtracted that from the total and got 236 for the final cost of the user's custom skateboard.

 Test value #2 - I entered 250 for the board, 85 for the trucks, 65 for the bearings and 70 for the wheels. This total equaled 475. Then I entered 35 for the discount and subtracted that from the total and got 308.75 for the final cost of the user's custom skateboard.

 Test value #3 - I entered 425 for the board, 120 for the trucks, 80 for the bearings and 100 for the wheels. This total equaled 725. Then I entered 10 for the discount and subtracted that from the total and got 652.5 for the final cost of the user's custom skateboard.
 */
