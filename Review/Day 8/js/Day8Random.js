/*
 Gregory Givler
 3/24/2015
 Section 00
 Day 8 Random
 */

//alert("Hello!");

//Create a function that will give us a random integer between two values.

//Create variables for min and max values.
var min=prompt("Let's find a random number between two values!\nPlease enter your min value:");
//Validate min value
while(isNaN(min)||min===""){
    //Reprompt the user
    min=prompt("Please do not leave blank and only use numbers.\nWhat is the min value?");
}
var max=prompt("Please enter your max value:");
//Validate max value
while(isNaN(max)||max===""||parseInt(max)<=parseInt(min)){
    if(isNaN(max)){
        max=prompt("Please only use numbers.\nWhat is the max value?");
    } else if(max===""){
        max=prompt("Please do not leave blank.\nWhat is the max value?");
    } else if(parseInt(max)<=parseInt(min)){
        max=prompt("Please enter a higher than your min number of "+min+".\nWhat is the max value?");
    }
}

//Function call
var ranNum=getRandom(min,max);
console.log("Your random number between "+min+" and "+max+" is "+ranNum+".");

//Create our function
function getRandom(min,max){
    //Generate a random integer
    var randomNumber=Math.round(Math.random()*(max-min)+parseInt(min));
    return randomNumber;
}


//15 Random numbers - console.log them out
for(var i=0;i<15;i++){
    //this will give the same number 15 times
    //console.log(ranNum);
    console.log(getRandom(min,max));
}


