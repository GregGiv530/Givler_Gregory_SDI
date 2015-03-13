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
userArray[0]=prompt("Trying to figure out how much you spent on next-gen video games this year?\nDid you buy a system this year?");
userArray[0]=userArray[0].toLowerCase();
//Validation for user input
if(userArray[0]==""){
    userArray[0]=prompt("Please do not leave blank.\nDid you buy a system this year?");
    userArray[0]=userArray[0].toLowerCase();
} else if(userArray[0]=="no"){
    console.log("This calculator is useless to you if you didn't buy any console this year!!!");
}

//Conditional for user's system or systems that they bought.
if(userArray[0]=="yes"){
    userArray[1]=prompt("You said "+userArray[0]+".\nWhich console did you purchase?");
    userArray[1]=userArray[1].toLowerCase();
    //If user inputs Xbox One this code will run.
    if(userArray[1]!="xbox one"||userArray[1]!="xbox 1"){
        userArray[2]=prompt("How much did your Xbox One cost?");
        //Validation of system cost
        if(isNaN(userArray[2])){
            userArray[2]=prompt("Please ONLY enter numbers.\nHow much did your Xbox One cost?");
        }
    //If user inputs Playstation 4 this code will run.
    } else if(userArray[1]!="ps4"||userArray[1]!="playstation 4"){
        userArray[2]=prompt("How much did your Playstation 4 cost?");
    }
}

