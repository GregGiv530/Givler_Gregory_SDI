/*
 Gregory Givler
 3/12/2015
 Section 00
 Day 5 Nesting ifs
 */

//alert("Hello!");

//Some decisions affect other decisions

//If it is warm lets go to the beach, if it is not then lets go to the movies.

//Get temperature
var temp=prompt("We are going to figure out what you should do today.\nWhat is the current temperature outside?");

//Validate that the user typed in SOMETHING - did they leave it blank
if(temp==""){
    //This code will run if the user types in nothing
    //Repropmt the user
    temp=prompt("Please do not leave this blank, it is required.\nWhat is the current temperature outside?");
}

//Validate that the user typed in a number.
//isNAN() - is it not a number - returns a boolean
//Literally say out loud. Is "monkey" not a number?
console.log(isNaN(7));//Gives us False
console.log(isNaN("Monkey"));//Give us True

if(isNaN(temp)){
    //This code will run when temp is not a number
    //Reprompt the user for the information
    //Gives the user a second chance!
    temp=prompt("Please only type in numbers!\nEnter the temperature outside.");
}

if(temp>=80){
    console.log("Let's go to the beach.");
    //Lets set the water temperature
    var waterTemp=prompt("What is the water temperature?");

    //Validate the water temp
    if(waterTemp===""||isNaN(waterTemp)){
        //This code will run if the variable is blank or not a number.
        //Reprompt the user
        waterTemp=prompt("Please do not leave blank and only use numbers.\nWhat is the water temp?");
    }

    if(waterTemp>75){
        console.log("Let's go swimming!");

        var knowSwim=prompt("Do you know how to swim?");

        //Convert the text sting to lower case
        //toLowerCase - dot syntam - use a period
        knowSwim=knowSwim.toLocaleLowerCase();
        console.log(knowSwim);

        //Validate the knowSwim variable
        if(knowSwim!="yes"&&knowSwim!="Yes"&&knowSwim!="no"&&knowSwim!="No"){
            //Reprompt the user
            knowSwim=prompt("Only type in yes or no.\nCan you swim?");
            knowSwim=knowSwim.toLocaleLowerCase();
        }

        if(knowSwim=="yes"){
            console.log("No floaties needed.");
        } else{
            console.log("Get a floatie.");
        }
    } else{
        console.log("Let's get a tan!")
    }

} else{
    console.log("Let's go to the movies.");
    //Do we have any kids in the group
    var kids=prompt("Are you bringing kids?");
    //Validate
    //Convert to lower case
    kids=kids.toLowerCase();

    if(kids!="yes"&&kids!="no"){
        //Reprompt
        kids=prompt("Please enter ONLY yes or no!\nAre you bringing kids?");
        //Permently convert to lower case
        kids=kids.toLowerCase();
        
    }


    //Test if we have kids
    if(kids==="no"){
        console.log("Let's see 50 Shades of Gray!");
    } else{
        console.log("Let's go see Sponge Bob!");
    }
}

/*
//If the water temperature is above 75, let go swimming, if not lets get a tan.

if(waterTemp>75){
    console.log("Let's go swimming!");
} else{
    console.log("Let's get a tan!")
}
*/


