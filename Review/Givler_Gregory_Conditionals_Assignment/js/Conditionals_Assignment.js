/*
 Gregory Givler
 3/14/2015
 Section 00
 Conditionals Assignment
 */

//alert("Hello!");

//Calculator for figuring out how much the sales tax on next gen systems in user's area will cost them and if they bought multiple systems.
//Array for user input
var userArray=[]

//User input for what systems they have bought.(text string)
userArray[0]=prompt("Trying to figure out how much sales tax will be added to your next-gen video game system purchase in your area?\n(Only for Xbox One, PS4, or Wii.)");
userArray[0]=userArray[0].toLowerCase();

//Validation for user input using ternary.
(userArray[0]=="")?userArray[0]=prompt("Please do not leave blank, enter yes or no.\nWould you like to know the cost of next-gen video game systems, plus sales tax, in your area?\n(Only for Xbox One, PS4, or Wii.)"):(userArray[0]!="yes"&&userArray[0]!="no")?userArray[0]=prompt("Please only enter yes or no.\nWould you like to know the cost of next-gen systems, plus sales tax, in your area?\n(Only for Xbox One, PS4, or Wii.)"):null;

// Makes the validation lower case
userArray[0]=userArray[0].toLowerCase();

//If user inputs "no" after a blank box
if(userArray[0]=="no"){
    console.log("This calculator is useless to you if you do not want to buy any consoles!!!")
}

//Conditional for user's system or systems that they bought.
if(userArray[0]=="yes"||userArray[0]=="Yes") {
    userArray[1] = prompt("Which system did you wish to purchase?");
    userArray[1] = userArray[1].toLowerCase();
    //If user inputs Xbox One this code will run.
    if (userArray[1] == "xbox one" || userArray[1] == "xbox 1" || userArray[1] == "xbox1") {
        userArray[2] = prompt("How much would your Xbox One cost?");
        //Validation of system cost.
        if (isNaN(userArray[2])) {
            userArray[2] = prompt("Please ONLY enter numbers.\nHow much would your Xbox One cost?");
        }
    }
    //If user inputs Playstation 4 this code will run.
    else if (userArray[1] == "ps4" || userArray[1] == "playstation 4" || userArray[1] == "playstation4") {
        userArray[2] = prompt("How much would your Playstation 4 cost?");
        //Validation of system cost.
        if (isNaN(userArray[2])) {
            userArray[2] = prompt("Please ONLY enter numbers.\nHow much would your Playstation 4 cost?");
        }
    }
    //If user inputs Wii this code will run.
    else if (userArray[1] == "wii") {
        userArray[2] = prompt("How much would your Wii cost?");
        //Validation of system cost.
        if (isNaN(userArray[2])) {
            userArray[2] = prompt("Please ONLY enter numbers.\nHow much would your Wii cost?");
        }
    } else if (userArray[1] != "xbox one" || userArray[1] != "xbox 1" || userArray[1] != "xbox1" || userArray[1] != "ps4" || userArray[1] != "playstation 4" || userArray[1] != "playstation4" || userArray[1] != "wii") {
        userArray[1] = prompt("(Please ONLY enter Xbox One, Playstation 4, or Wii.)\nWhich system did you wish to purchase?");
        userArray[1] = userArray[1].toLowerCase();
        //If user inputs Xbox One this code will run.
        if (userArray[1] == "xbox one" || userArray[1] == "xbox 1" || userArray[1] == "xbox1") {
            userArray[2] = prompt("How much would your Xbox One cost?");
            //Validation of system cost.
            if (isNaN(userArray[2])) {
                userArray[2] = prompt("Please ONLY enter numbers.\nHow much would your Xbox One cost?");
            }
        }
        //If user inputs Playstation 4 this code will run.
        else if (userArray[1] == "ps4" || userArray[1] == "playstation 4" || userArray[1] == "playstation4") {
            userArray[2] = prompt("How much would your Playstation 4 cost?");
            //Validation of system cost.
            if (isNaN(userArray[2])) {
                userArray[2] = prompt("Please ONLY enter numbers.\nHow much would your Playstation 4 cost?");
            }
        }
        //If user inputs Wii this code will run.
        else if (userArray[1] == "wii") {
            userArray[2] = prompt("How much would your Wii cost?");
            //Validation of system cost.
            if (isNaN(userArray[2])) {
                userArray[2] = prompt("Please ONLY enter numbers.\nHow much would your Wii cost?");
            }

        }
    }
}
//Adding in cost of sales tax for user's area or purchase for one system.
userArray[3] = prompt("What is the sales tax percent in your area?\n(Please ONLY enter the number of the percent!)");
//Validation to make sure a number is entered.
if (isNaN(userArray[3])) {
    userArray[3] = prompt("Please ONLY use numbers!!!\nWhat is the sales tax percent in your area?");
    userArray[3] /= 100;
    userArray[3] = Number(userArray[3]) * Number(userArray[2]);
    userArray[2] = Number(userArray[2]) + Number(userArray[3]);
}else{
    userArray[3] /= 100;
    userArray[3] = Number(userArray[3]) * Number(userArray[2]);
    userArray[2] = Number(userArray[2]) + Number(userArray[3]);
}

//Output if user only buys one system
//If user buys a Xbox One
if (userArray[1] == "xbox one" || userArray[1] == "xbox 1" || userArray[1] == "xbox1") {
    console.log("You said you want to buy a Xbox One and by adding in your sales tax you would spend $" + (userArray[2]) + " on your system.");
    //If user buys a Playstation 4
} else if (userArray[1] == "ps4" || userArray[1] == "playstation 4" || userArray[1] == "playstation4") {
    console.log("You said you want to buy a Playstation 4 and by adding in your sales tax you would spend $" + (userArray[2]) + " on your system.");
    //If user buys a Wii
} else if (userArray[1] == "wii") {
    console.log("You said you want to buy a Wii and by adding in your sales tax you would spend $" + (userArray[2]) + " on your system.");
}


/*
1.User will be prompted with userArray[0] and if the enter anything but yes or no they will be prompted and the same goes for leaving the prompt box blank. All answers will be made lower case as well. If they enter no they will get a console.log saying this calculator is useless to them.

2.If the user enters yes into the userArray[0] they will then be prompted with userArray[1]. If they do not enter the right response they will be prompted with userArray[1] again with more specific instructions. If they enter the right response on the first userArray[1] or the second userArray[1] then they will be prompted with userArray[2]. Each seperate system has a validation to have them enter the correct price of the system and that will run if the user does not enter a number.

3.The user will then be prompted to enter userArray[3], which is the sales tax in the user's area. If they do not enter a number a validation will occur for them to enter only numbers. After the user does that correctly the math formulas will turn userArray[3] into a decimal to add in the sales tax of the item. Then it will take that number and add it to the price of the system.

4.The last step will show a console.log of what system the user bought and the total amount including sales tax.
 */
















