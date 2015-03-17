/*
 Gregory Givler
 3/17/2015
 Section 00
 Day 7 Functions
 */

//Function call the printHello before it is defined in our code
printHello();
calcArea();

//alert("Hello!");

//The basic structure of a function
//function functionName(){code to run}

//Create a function that will console.log out hello
function printHello(){
    console.log("Hello and Howdy!");
}

//Create a function that prints out more text
function printMore(){
    console.log("Prints more text!");
}

//Function call the printHello function
//functionName();
printHello();
printMore();
printHello();

//Function call printMore
printMore();

//Create a function that calculates the area of a rectangle.
function calcArea(){
    //Create variables for width, height, and area.
    var width=20;
    var height=30;
    var area=width*height;
    console.log("The are is "+area);
}

//Function call for calcArea
calcArea();


