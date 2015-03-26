/*
 Gregory Givler
 3/24/2015
 Section 00
 Day 8 Procedures
 */

//alert("Hello!");

//This is a basic function.
function calcAreaF(w,h){
    var area=w*h;
    return area;
}

//Function Call
var area=calcAreaF(6,8);
console.log("The area of the rectangle is "+area);

//This is a procedure
//A list of steps to do
function calcAreaP(w,h){
    var area=w*h;
    //We do NOT return this value
    console.log("Inside the procedure the area is "+area);
}

//Function Call for the procedures?
//Just the function name with no variable to catch it
calcAreaP(12,16);

