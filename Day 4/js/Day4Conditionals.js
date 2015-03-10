/*
 Gregory Givler
 3/10/2015
 Section 00
 Day 4 Conditionals
 */


//alert("Hello!");

//Basic Conditional
/*
if(condition to test){
    code to run if the condition is true
}
 */

//Create a boolean variable
var oldEnough=false;

//If the kid is old enough, he can ride the ride.
if(oldEnough){
    //code to run if the kid is old enough
    console.log("The kid is old enough to ride the coaster.");
} else {
    //Code to run if the kid is not old enough.
    console.log("Sorry you are to young.");
}

//Relational operators

//If the kid is over 48 inches tall, then he can ride the coaster
var kidHeight=57;

//Create a variable for the minimal height requirements.
var minHeight=48;

//Create a variable for sneaker lifts
var sneakerLifts = 2;

//test the kids height
if(kidHeight>minHeight){
    console.log("Kid is tall enough to ride the coaster!");
} else if(kidHeight+sneakerLifts>minHeight){
    console.log("If you use enough napkins you can ride the ride.");
} else{
    console.log("Sorry you are to short!");
}



