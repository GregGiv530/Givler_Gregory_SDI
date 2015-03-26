/*
 Gregory Givler
 3/14/2015
 Section 00
 Day 6 Validation
 */

//alert("Hello!");

//Ask the user for a number
var num1=prompt("Please enter a number:");

//Validate that the user typed in a number OR didnt leav it blank

//Validate using a while loop
while(isNaN(num1)||(num1==="")){
    //Reprompt the user
    if(num1===""){
        //The user left it blank.
        num1=prompt("Please do not leave blank!\nPlease type in a number");
    } else if(isNaN(num1)){
        num1=prompt("Please only type in numbers.\nEnter a number:");
    }

}

//Ask the user a yes or no question
var userInput=prompt("Please enter yes or no:");
//Convert it to lower case
userInput=userInput.toLowerCase();

//Validate
while(userInput!="yes"&&userInput!="no"&&userInput!="nope"){
    //Reprompt
    userInput=prompt("Please only enter in yes or no.");
}