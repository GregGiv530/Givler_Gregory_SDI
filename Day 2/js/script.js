/*
Gregory Givler
3/5/15
Section 00
Day 2 Intro
 */

//alert("Testing to see if connected.");

/*
Example of a multi-lined comment.
Anything inside of here will not be seen by the computer.
 */

//Single line comment. Only this line will be ignored.

//Alert box- pop up boc that will alert the user with information.
alert("Text that the user will see.");

//Console.log - Shows information to the programmer
// Great for checking values and debugging.
// Also shows all error
console.log("This is the console.");

//Declare a variable
//Use the keyword of var
var whatever1;

//Define the variable
//Sets the value of the existing variable
whatever1 = 42;

//Console.log the variable
console.log("The variable whatever1 is");
console.log(whatever1);

//Declare and define a variable at the same time.
var a = 2;

console.log(a);

a+3;
a=a+3;
console.log(a);


//Declare new variable
var b;

//Define this variable using an existing variable
b = a+3;
console.log(a);
console.log(b);

//Simple Math
//Find our ages

//Declare and Define the year we were born
var yearBorn = 1987;

//2015 - year we are born
var ourAge = 2015-yearBorn-1;
console.log(ourAge);

//Talk about Math
//+,-,*,/

//Find the area for a triangle
//base*height/2
var base = 4;
var height = 5;
var areaTriangle = base*height/2;
console.log(areaTriangle);

//Modulo - %
//Give the remainder
var decimal = 32/10;
console.log(decimal);

var remainder = 32%10;
console.log(remainder);

//To find out if even or odd
// %2  1=odd 0=even
var evenOrOdd = 67%2;
console.log(evenOrOdd);

