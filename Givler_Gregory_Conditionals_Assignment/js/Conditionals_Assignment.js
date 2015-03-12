/*
 Gregory Givler
 3/12/2015
 Section 00
 Conditionals Assignment
 */

//alert("Hello!");

//Calculator for figuring out how much is spent on video games in an entire year.
//Array for user input
var userArray=[]

//User input for what systems they have bought.(text string)
userArray[0]=prompt("Trying to figure out how much you spent on video games this year?\nDid you buy a system/s this year?\nPlease only enter one console name.");
userArray[0]=userArray[0].toLowerCase();

//Conditional for user's system or systems that they bought.
if(userArray[0]!="xbox one"||userArray[0]!="xbox 1"){
    var xboxOne=prompt("You entered "+userArray[0]+".\nIs this Correct?");
    xboxOne=xboxOne.toLowerCase()
    if(xboxOne!="yes"){
        
    }
} else{
    console.log("Whats the dealio!");
}

