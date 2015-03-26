/*
 Gregory Givler
 3/17/2015
 Section 00
 Day 7 Return
 */

//alert("Hello!");

//Return a value from our function to our main code

//Create a function calculate the area of a rectangle
function calcArea(w,h){
    //Calculate the area
    var area=w*h;
    console.log("Inside the function the area is "+area);
    //Return the area to the main code
    return area;
}

//Call the function
//Create a variable to CATCH the return value
var rectArea=calcArea(10,20);

//console.log the area
//console.log(area);
console.log(rectArea);

//Create a function to calculate the area of a circle
function circleArea(r){
    //Calc area Pi*r*r
    var area=Math.PI*r*r;
    return area;
}

//function call this circleArea
//Create a variable to catch the return area
var circArea=circleArea(6);

//console.log the results
console.log("The area of the circle is "+circArea);

//What is twice the cirlce area of a 6 inch circle
var resultsTwice=circArea*2;
console.log("Twice the area is "+resultsTwice);


