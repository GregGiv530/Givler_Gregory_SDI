/*
 Gregory Givler
 3/17/2015
 Section 00
 Day 7 Scope
 */

//alert("Hello!");

//Variable Scope
//Variable inside and outside of a function

//Try not to use the same variable names, BUT
//In big files this is going to be impossible

//Create a variable for width in our MAIN CODE
//Scoped outside of the function - "Main Code"
var width=5;

//Create a function that calculates the parimeter of a rectangle
function calcPeri(){
    //Create a variable called width inside of the function
    //Scoped to the function calcPeri
    var width=10;

    //Create a variable for height and perimeter
    var height=20;
    var perimeter=width*2+height*2;

    console.log("Inside of the function, there perimeter is "+perimeter);

    //Variables created inside of a function can not be accessed outside of the function
    //Variables created outside of the function can be accessed, but usually will not be.
}
console.log("Before the function call width = "+width);

//Function call calcPeri
calcPeri();
console.log("After the function call width = "+width);

//console.log out the answer.
//THIS DOES NOT WORK - VEGAS!!!
//console.log("Outside of the function, the perimeter is "+perimeter);


