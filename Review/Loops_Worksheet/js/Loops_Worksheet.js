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
//Variable for what their favorite animal is...a monkey or a cat
var monkeyCat=prompt("Which animal do you like more monkeys or cats?");
//Converts to lower case
monkeyCat=monkeyCat.toLowerCase()

//Loop for validation
while(monkeyCat!="monkeys"&&monkeyCat!="cats"){
    //Reprompting the user for correct input
    monkeyCat=prompt("Please only enter monkeys or cats.\nWhich animal do you like more monkeys or cats?");
}
console.log("YAY!!! You like "+monkeyCat+" more!!!");
//Loop will show that the user likes monkeys or cats more if they enter monkeys or cats. Will loop if left blank, a number is entered, and if a different text is entered into the prompt.

//Validation loop for numbers
//Prompt will ask the user have many eggs are in a dozen
var dozenEggs=prompt("How many eggs are there in a dozen?");

//Loop for validation
while(dozenEggs!=12){
    if(dozenEggs==""){
        dozenEggs=prompt("Please do not leave blank.\nHow many eggs are there in a dozen?");
    } else if(isNaN(dozenEggs)){
        dozenEggs=prompt("Please only enter the number.\nHow many eggs are there in a dozen?")
    } else if(dozenEggs!=12){
        dozenEggs=prompt("Incorrect!!!\nHow many eggs are there in a dozen?")
    }
}
console.log("Correct!!! There are "+dozenEggs+" in a dozen")
//The prompt will continue to pop up until the user enters the correct answer of 12.