/*
 Gregory Givler
 3/10/2015
 Section 00
 Day 4 Conditionals Worksheet
 */

//alert("Hello!");

//Group 1
//Celsius to Fahrenheit Converter

//Variables for Fahrenheit and Celsius and user input for Celsius and Fahrenheit.
var userInput=prompt("Would you like to know how to convert between \nCelsius and Fahrenheit? \nPlease enter F or C to convert either or.");
var fahText="F";
var celText="C";

//Prompts for number input to convert to Celsius and Fahrenheit.
if(userInput==fahText){
    var fah=prompt("Now enter the number you wish to convert into Celsius.");
} else if(userInput==celText){
    var cel=prompt("Now enter the number you wish to convert into Fahrenheit.");
} else{
    alert("Please enter F or C!!!");
}

//Variables and math formulas for converting Celsius to Fahrenheit and vise versa
var fahConCel=(fah-32)*5/9;
var celConFah=cel*9/5+32;

//Conditional for output
if(fahConCel){
    console.log("The temperature is "+fahConCel+" degrees in Celsius.")
} else{
    console.log("The temperature is "+celConFah+" degrees in Fahrenheit.")
}

//Group 2
//Full Sail Grade Letter Calculator

//Variables for letter grade and user input
var studentInput=prompt("What percent did you receive for the class? \nSo we can determine your letter grade.");
var aa="A+";
var a="A";
var bb="B+";
var b="B";
var cc="C+";
var c="C";
var d="D";
var f="F";

//Conditional to determine the letter grade
if(studentInput>=95){
    console.log("You have a "+Number(studentInput)+"%, which means you have earned a(n) "+aa+" in the class");
} else if(studentInput<95&&studentInput>=90){
    console.log("You have a "+Number(studentInput)+"%, which means you have earned a(n) "+a+" in the class");
} else if(studentInput<90&&studentInput>=85){
    console.log("You have a "+Number(studentInput)+"%, which means you have earned a(n) "+bb+" in the class");
} else if(studentInput<85&&studentInput>=80){
    console.log("You have a "+Number(studentInput)+"%, which means you have earned a(n) "+b+" in the class");
} else if(studentInput<80&&studentInput>=76){
    console.log("You have a "+Number(studentInput)+"%, which means you have earned a(n) "+cc+" in the class");
} else if(studentInput<76&&studentInput>=73){
    console.log("You have a "+Number(studentInput)+"%, which means you have earned a(n) "+c+" in the class");
} else if(studentInput<73&&studentInput>=70){
    console.log("You have a "+Number(studentInput)+"%, which means you have earned a(n) "+d+" in the class");
} else(studentInput<70){
    console.log("You have a "+Number(studentInput)+"%, which means you have earned a(n) "+f+" in the class");
}






