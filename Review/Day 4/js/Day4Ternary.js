/*
 Gregory Givler
 3/10/2015
 Section 00
 Day 4 Ternary
 */

//alert("Hello!");

//If your gpa is over 2.0 then you can graduate
//Create a variable for gpa
var gpa=3.5;

//Basic Conditional
if(gpa>2.0){
    console.log("You can gradute!");
} else{
    console.log("Work harder, you can not graduate!");
}

//(condition to test)? code to run if true:code to run if false
//create a basic ternary function for our gpa
(gpa>2.0)?console.log("You can gradute!"):console.log("Work harder, you can not graduate!");

//If a child is under 10 then they must read green eggs and ham, otherwise they can read the time machine.

//Create a variable for child age and for the book they have to read.
var age=16
var book;

//Use a ternary to define the book.
book=(age<10)? "Green Eggs and Ham":"The Time Machine";

console.log("The kid should read "+book+".");

//Value of book if basic conditional
var bookBasic;

if(age<10){
    bookBasic="Green Eggs and Ham";
} else{
    bookBasic="The Time Machine";
}
console.log(bookBasic);

