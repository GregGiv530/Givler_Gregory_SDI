/*
 Gregory Givler
 3/12/2015
 Section 00
 Conditionals Assignment
 */

//alert("Hello!");

//Calculator for figuring out how much the sales tax on next gen systems in user's area will cost them and if they bought multiple systems.
//Array for user input
var userArray=[]

//User input for what systems they have bought.(text string)
userArray[0]=prompt("Trying to figure out how much sales tax will be added to your next-gen system in your area?\nWould you like to know the cost of next-gen systems, plus sales tax, in your area?\n(Only for Xbox One, PS4, or Wii.)");
userArray[0]=userArray[0].toLowerCase();

//Validation for user input using ternary.
(userArray[0]=="")?userArray[0]=prompt("Please do not leave blank, enter yes or no.\nWould you like to know the cost of next-gen systems, plus sales tax, in your area?\n(Only for Xbox One, PS4, or Wii.)"):(userArray[0]!="yes"&&userArray[0]!="no")?userArray[0]=prompt("Please only enter yes or no.\nWould you like to know the cost of next-gen systems, plus sales tax, in your area?\n(Only for Xbox One, PS4, or Wii.)"):(userArray[0]=="no")?console.log("This calculator is useless to you if you do not want to buy any consoles!!!"):null;
userArray[0]=userArray[0].toLowerCase();

//If user inputs "no" after a blank box
if(userArray[0]=="no"){
    console.log("This calculator is useless to you if you do not want to buy any consoles!!!")
}

//Conditional for user's system or systems that they bought.
if(userArray[0]=="yes"||userArray[0]=="Yes"){
    userArray[1]=prompt("Which system did you wish to purchase?");
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
userArray[3]=prompt("Was this the only system you want to buy?");
userArray[3]=userArray[3].toLocaleLowerCase();

//Conditional for user's system or systems that they bought.
if(userArray[3]=="no"||userArray[3]=="No"){
    userArray[4]=prompt("What other system do you wish to purchase?");
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
    //Adding in cost of salse tax for user's area or purchase.
} else if(userArray[3]=="yes"||userArray[3]=="Yes"){
    userArray[6]=prompt("What is the sales tax percent in your area?\n(Please ONLY enter the number of the percent!)");
    userArray[6]/=100;
    userArray[6]=Number(userArray[6])*Number(userArray[2]);
    userArray[2]=Number(userArray[2])+Number(userArray[6]);
    //Validation to make sure a number is entered.
    if(isNaN(userArray[6])){
        userArray[6]=prompt("Please ONLY use numbers!!!\nWhat is the sales tax percent in your area?");
        userArray[6]/=100;
        userArray[6]=Number(userArray[6])*Number(userArray[2]);
        userArray[2]=Number(userArray[2])+Number(userArray[6]);
    }
}

//Conditional for output if the user only bought one system
//If user only bought an Xbox One
if(userArray[1]=="xbox one"||userArray[1]== "xbox 1"||userArray[1]=="xbox1"){
    console.log("You said you bought a Xbox One and by adding in your sales tax you spent $"+userArray[2]+" on your system.")
    //If user only bought a Playstation 4
} else if(userArray[1]=="ps4"||userArray[1]=="playstation 4"||userArray[1]=="playstation4"){
    console.log("You said you bought a Playstation 4 and by adding in your sales tax you spent $"+userArray[2]+" on your system.")
    //If user only bought a Wii
} else if(userArray[1]=="wii"){
    console.log("You said you bought a Wii and by adding in your sales tax you spent $"+userArray[2]+" on your system.")
}

