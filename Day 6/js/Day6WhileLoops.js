/*
 Gregory Givler
 3/14/2015
 Section 00
 Day 6 While Loops
 */

//alert("Hello!");

//Basic While Loop

//Start a courter variable
var counter=0

//Start the While Loop
//Condition to test goes inside ().
while(counter<200){
    console.log("Somethings never end!");
    console.log(counter);

    //Make a change to the counting variable
    counter+=50;
}

//Do While Loop

//This loop will run the code first then check a condition!!

/*
do{
    //Code to run
}while(condition to test);

 */

//Declare a counting variable
var i=20;

do{
    console.log("The number is "+i);
    //Change the counting variable
    i++
} while(i<10);
