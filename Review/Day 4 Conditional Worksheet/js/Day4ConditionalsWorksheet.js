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
userInput.toLowerCase();

while(userInput===""||(userInput!="f"&&userInput!="c")){
    userInput=prompt("Please do not leave blank or use numbers.\nOnly enter F for Fahrenheit or C for Celsius!");
}

//Prompts for number input to convert to Celsius and Fahrenheit.
if(userInput==="f"){
    var fah=prompt("Now enter the number you wish to convert into Celsius.");
    while(fah===""||isNaN(fah)){
        fah=prompt("Please do not leave blank and only use numbers.\nNow enter the number you wish to convert into Celsius.")
    }
    fah=parseInt(fah);
} else if(userInput==="c"){
    var cel=prompt("Now enter the number you wish to convert into Fahrenheit.");
    while(cel===""||isNaN(cel)){
        cel=prompt("Please do not leave blank and only use numbers.\nNow enter the number you wish to convert into Celsius.")
    }
    cel=parseInt(cel)
}
var conCel=function(f){
    var conversion=(f-32)*5/9;
    return conversion;
}
var conFah=function(c){
    var conversion=c*9/5+32;
    return conversion;
}
//Variables and math formulas for converting Celsius to Fahrenheit and vise versa
var fahConCel=conCel(fah);
var celConFah=conFah(cel);

//Conditional for output
if(userInput!="c"){
    console.log("The temperature is "+fahConCel+" degrees in Celsius.")
} else{
    console.log("The temperature is "+celConFah+" degrees in Fahrenheit.")
}

//Group 2
//Full Sail Grade Letter Calculator

//Variables for letter grade and user input
var studentInput=prompt("What percent did you receive for the class? \nSo we can determine your letter grade.");
while(studentInput===""||isNaN(studentInput)){
    studentInput=prompt("Please do not leave blank and only use numbers.\nWhat percent did you recieve in the class?");
}
var gradeLetters=["A+","A","B+","B","C+","C","D","F"];

//Conditional to determine the letter grade
if(studentInput>=95){
    console.log("You have a "+parseInt(studentInput)+"%, which means you have earned a(n) "+gradeLetters[0]+" in the class");
} else if(studentInput<95&&studentInput>=90){
    console.log("You have a "+parseInt(studentInput)+"%, which means you have earned a(n) "+gradeLetters[1]+" in the class");
} else if(studentInput<90&&studentInput>=85){
    console.log("You have a "+parseInt(studentInput)+"%, which means you have earned a(n) "+gradeLetters[2]+" in the class");
} else if(studentInput<85&&studentInput>=80){
    console.log("You have a "+parseInt(studentInput)+"%, which means you have earned a(n) "+gradeLetters[3]+" in the class");
} else if(studentInput<80&&studentInput>=76){
    console.log("You have a "+parseInt(studentInput)+"%, which means you have earned a(n) "+gradeLetters[4]+" in the class");
} else if(studentInput<76&&studentInput>=73){
    console.log("You have a "+parseInt(studentInput)+"%, which means you have earned a(n) "+gradeLetters[5]+" in the class");
} else if(studentInput<73&&studentInput>=70){
    console.log("You have a "+parseInt(studentInput)+"%, which means you have earned a(n) "+gradeLetters[6]+" in the class");
} else{
    console.log("You have a "+parseInt(studentInput)+"%, which means you have earned a(n) "+gradeLetters[7]+" in the class");
}

//Group 3
//Tire Pressure

//User input for each front tire and each back tire
var frontR=prompt("Let's see if you tires pass spec.\n The pressure needs to be equal in the front and back\nbut can be different from each other.\nWhat is the pressure of the front right tire?");
while(frontR===""||isNaN(frontR)){
    frontR=prompt("Please only use numbers and do not leave blank.\nWhat is the pressure of the front right tire?");
}
var frontL=prompt("What is the pressure of the front left tire?");
while(frontL===""||isNaN(frontL)){
    frontL=prompt("Please only use numbers and do not leave blank.\nWhat is the pressure of the front right tire?");
}
var backR=prompt("What is the pressure of the back right tire?");
while(backR===""||isNaN(backR)){
    backR=prompt("Please only use numbers and do not leave blank.\nWhat is the pressure of the front right tire?");
}
var backL=prompt("what is the pressure of the back left tire?");
while(backL===""||isNaN(backL)){
    backL=prompt("Please only use numbers and do not leave blank.\nWhat is the pressure of the front right tire?");
}

//Ternary for user's input that determines the final outcome.
(Number(frontR)===Number(frontL)&&Number(backR)===Number(backL))?console.log("The tires pass spec!"):console.log("Get your tires checked out!");





