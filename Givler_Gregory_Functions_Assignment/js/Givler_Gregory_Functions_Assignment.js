/*
 Gregory Givler
 3/24/2015
 Section 00
 Functions Assignment
 */

//alert("Hello!");

//Calculator for how much a custom skateboard would cost.

//Prompt for user input for cost of board
var board=prompt("Let's find out how much it would cost to get a custom skateboard.\nHow much does your board cost?");
//While loop for validation
while(board===""||isNaN(board)){
    board=prompt("Please do not leave blank and only use numbers.\nHow much does your board cost?")
}
//parseInt for user input
board=parseInt(board);

//Prompt for user input for cost of trucks
var trucks=prompt("How much do your trucks cost?");
//While loop for validation
while(trucks===""||isNaN(trucks)){
    trucks=prompt("Please do not leave blank and only use numbers.\nHow much do your trucks cost?")
}
//parseInt for user input
trucks=parseInt(trucks);