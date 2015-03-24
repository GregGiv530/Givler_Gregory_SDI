/*
 Gregory Givler
 3/24/2015
 Section 00
 Functions Assignment
 */

//alert("Hello!");

//Calculator for how much a custom skateboard would cost with a discount on the purchase.

//Prompt for user input for cost of board
var board=prompt("Let's find out how much it would cost to get a custom skateboard.\nHow much does your board cost?");
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
    trucks=prompt("Please do not leave blank and only use numbers.\nHow much do your bearings cost?");
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