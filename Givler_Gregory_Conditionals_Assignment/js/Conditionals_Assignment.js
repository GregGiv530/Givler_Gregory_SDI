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
userArray[0]=prompt("Trying to figure out how much you spent on next-gen video games this year?\nDid you buy a system this year?\n(Such as Xbox One, PS4, or Wii.)");
userArray[0]=userArray[0].toLowerCase();

//Validation for user input using ternary.
(userArray[0]=="")?userArray[0]=prompt("Please do not leave blank, enter yes or no.\nDid you buy a system this year?\n(Such as Xbox One, PS4, or Wii.)"):(userArray[0]=="no")?console.log("This calculator is useless to you if you didn't buy any consoles this year!!!"):null;
userArray[0]=userArray[0].toLowerCase();

//If user inputs "no" after a blank box
if(userArray[0]=="no"){
    console.log("This calculator is useless to you if you didn't buy any consoles this year!!!")
}

//Conditional for user's system or systems that they bought.
if(userArray[0]=="yes"||userArray[0]=="Yes"){
    userArray[1]=prompt("Which console did you purchase?");
    userArray[1]=userArray[1].toLowerCase();
    //If user inputs Xbox One this code will run.
    if(userArray[1]=="xbox one"||userArray[1]== "xbox 1"||userArray[1]=="xbox1"){
        userArray[2]=prompt("How much did your Xbox One cost?");
        //Validation of system cost.
        if(isNaN(userArray[2])){
            userArray[2]=prompt("Please ONLY enter numbers.\nHow much did your Xbox One cost?");
        }
    }
    //If user inputs Playstation 4 this code will run.
    else if(userArray[1]=="ps4"||userArray[1]=="playstation 4"||userArray[1]=="playstation4") {
        userArray[2]=prompt("How much did your Playstation 4 cost?");
        //Validation of system cost.
        if(isNaN(userArray[2])){
            userArray[2] = prompt("Please ONLY enter numbers.\nHow much did your Playstation 4 cost?");
        }
    }
    //If user inputs Wii this code will run.
    else if(userArray[1]=="wii"){
        userArray[2]=prompt("How much did your Wii cost?");
        //Validation of system cost.
        if(isNaN(userArray[2])){
            userArray[2] = prompt("Please ONLY enter numbers.\nHow much did your Wii cost?");
        }
    }
}

//Will ask user if they bought another system.
userArray[3]=prompt("Was this the only system you bought this year?");
userArray[3]=userArray[3].toLocaleLowerCase();

//Conditional for user's system or systems that they bought.
if(userArray[3]=="no"||userArray[3]=="No"){
    userArray[4]=prompt("Which console did you purchase?");
    userArray[4]=userArray[4].toLowerCase();
    //If user inputs Xbox One this code will run.
    if(userArray[4]=="xbox one"||userArray[4]== "xbox 1"||userArray[4]=="xbox1"){
        userArray[5]=prompt("How much did your Xbox One cost?");
        //Validation of system cost.
        if(isNaN(userArray[5])){
            userArray[5]=prompt("Please ONLY enter numbers.\nHow much did your Xbox One cost?");
        }
    }
    //If user inputs Playstation 4 this code will run.
    else if(userArray[4]=="ps4"||userArray[4]=="playstation 4"||userArray[4]=="playstation4") {
        userArray[5]=prompt("How much did your Playstation 4 cost?");
        //Validation of system cost.
        if(isNaN(userArray[5])){
            userArray[5] = prompt("Please ONLY enter numbers.\nHow much did your Playstation 4 cost?");
        }
    }
    //If user inputs Wii this code will run.
    else if(userArray[4]=="wii"){
        userArray[5]=prompt("How much did your Wii cost?");
        //Validation of system cost.
        if(isNaN(userArray[5])){
            userArray[5] = prompt("Please ONLY enter numbers.\nHow much did your Wii cost?");
        }
    }
} else if(userArray[3]=="yes"||userArray[3]=="Yes"){
    userArray[6]=prompt("What is the sales tax percent in your area?\n(Please ONLY enter the number of the percent!)");
    userArray[6]/=100;
    userArray[6]=Number(userArray[6])*Number(userArray[2]);
    userArray[2]=Number(userArray[2])+Number(userArray[6]);
    //Validation to amke sure a number is entered.
    if(isNaN(userArray[6])){
        userArray[6]=prompt("Please ONLY use numbers!!!\nWhat is the sales tax percent in your area?");
        userArray[6]/=100;
        userArray[6]=Number(userArray[6])*Number(userArray[2]);
        userArray[2]=Number(userArray[2])+Number(userArray[6]);
    }
}

