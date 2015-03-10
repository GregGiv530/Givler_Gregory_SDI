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
//Variables and math formulas for converting Celsius to Fahrenheit
var fahConCel=(fah-32)*5/9;
var celConFah=cel*9/5+32;

//Conditional for output
if(fahConCel){
    console.log("The temperature is "+fahConCel+" degrees in Celsius.")
} else{
    console.log("The temperature is "+celConFah+" degrees in Fahrenheit.")
}