/*
 Gregory Givler
 3/24/2015
 Section 00
 Day 8 Anonymous
 */

//alert("Hello!");

//Basic Function
/*
function functionName(){

}
 */

//Anonymous Function
/*
var functionName=function(){

}
 */

//Anon Functions area extremely popular in JS and jQuery
//Highly used in Object Object Oriented Programming
//Quick and Easy
//You can use either a basic or anon - FOR NOW

//Function calls above the definition
var basicArea2=triangleArea(2,9);
console.log("The area from the basic function before the definition is "+basicArea2);

/*
This does not work!! DO NOT PUT IT ABOVE THE DEFINITION!!!
//Anon function call before
var anonArea2=triangleAreaAnon(3,4);
console.log("The area from the anon function before the definition is "+anonArea2);
*/

//Build a basic function for area of a triangle
function triangleArea(b,h){
    //Calc area
    var area=.5*b*h;
    return area;
}

//Anon Function
var triangleAreaAnon=function(b,h){
    var area=.5*b*h;
    return area;
}

//Function cal to basic function
var basicArea=triangleArea(5,6);
console.log("The area from the basic function is "+basicArea);

//Function call to the Anon function
var anonArea=triangleAreaAnon(4,5);
console.log("The area from the Anon Function is "+anonArea);