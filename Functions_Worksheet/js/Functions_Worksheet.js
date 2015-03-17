/*
 Gregory Givler
 3/17/2015
 Section 00
 Functions Worksheet
 */

//alert("Hello!");

//Circumference of a circle
//Function for finding the circumference of a circle
function circCircle(r){
    circumference=2*Math.PI*r;
    return circumference;
}
//Variable for the radius
var radius=10;

//Variable to catch the return
var circResults=circCircle(radius);

//Console.log the answer
console.log("The circumference of the circle is "+circResults+".");

//Test values show the correct answer is show in the console. Function does the calculation.

//Stung!
//Function for finding how many bee stings it takes to kill an animal of a certain weight.
function killer(vw){
    beeStings=8.666666667*vw;
    return beeStings;
}
//Variable for victims weight
var victimsW=210;

//Variable for the return
var howMany=killer(210);

//Console.log for the output of how many bees it would take to kill an animal 210 lbs.
console.log("It takes "+howMany+" bee stings to kill this animal.");

//Test value is correct after running the function to calculate the number of bee stings it takes to kill an animal that is 210 lbs.

