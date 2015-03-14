/*
 Gregory Givler
 3/14/2015
 Section 00
 Loops Worksheet
 */

//alert("Hello!");

//While Loop
//Variable for while loop
var money=250;
var expenses=100;

//While Loop using the variable
while((money-expenses)<1250){
    console.log("Almost enough to fix my laptop!!!");
    money+=250
}
//Loop will run four times before moving onto the next code

//Do While Loop
//Counting variables
var i=0;
var j=20;
var k=80;

//Do loop using variables
do{
    console.log("You now have $"+i+"!");
    i+=k
    j-=j
}while(i<=600)
//Loop will run eight times before stopping and moving onto the next line of code.

//For Loop
//Variable to use in for loop
var l=2500;

//for loop using variables
for(var m=100;m<=l;m+=m){
    console.log(m+" monkeys are juming up and down!!!");
}
//Loop will run five times before moving on.

//Validation for text user input
