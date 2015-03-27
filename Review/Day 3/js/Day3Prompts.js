/*
 Gregory Givler
 3/7/2015
 Section 00
 Day 3 Prompts
 */

//alert("Hello!");

//Ask the user for input
// prompt("text that the user will see")

var userInput= prompt("Enter Year of Birth");
while (userInput===""||isNaN(userInput)){
    userInput=prompt("Please do not leave blank and only use numbers.\nEnter year of birth.");
}
console.log(userInput);

//calculate the area of rectangle
//length times width

//lets prompt the user for the width and height

//lets explain to them what is going on

var height=prompt("Let's calculate the area of a rectangle! \nPlease enter the height of the rectangle:");
while(height===""||isNaN(height)){
    height=prompt("Please do not leave blank and only use numbers.\nPlease enter the height of the rectangle:");
}

var width=prompt("Please enter the width of the rectangle:");
while(width===""||isNaN(width)){
    width=prompt("Please do not leave blank and only use numbers.\nPlease enter the width of the rectangle:");
}

//Calculate the area of the rectangle

var area=width*height;

//Tell the user the answer

console.log("The area of the rectangle with a height of "+height+" and a width of "+width+" is "+area+".");

var results="The results of the area is "+area+".";

console.log(results);
