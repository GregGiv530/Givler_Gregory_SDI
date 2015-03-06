/*
 Gregory Givler
 3/5/15
 Section 00
 Day 2 Lab Expressions
  */

alert("Day 2 Lab Expressions.")

/*
Slices of Pie 1
 */

//Number of pizza
var pizzas = 7;
//Number of people
var people = 16;
//Number of slices per pizza
var slices = 8;
//Slices per person
var slicesPerPerson = (slices*pizzas)/people;
//Adding the slices per person to the text sting
console.log("Each person gets "+slicesPerPerson+" slices at the party.");

/*
Slice of Pie 2
 */

//Sparky's pieces of pizza
var leftovers = (slices*pizzas)%people;
//Adding the total number of slices Sparky will get
console.log("Sparky got "+leftovers+" slices of pizza.");

/*
Average Shopping Bill
 */

//Number of weeks
var weeks=5;
//Amount spent over 5 weeks
var total=1500;
//Average per week
var average=total/weeks;
//Added the total spent over 5 weeks and the average per week
console.log("You have spent a total of $"+total+" on groceries over 5 weeks. That is an average of $"+average+" per week");