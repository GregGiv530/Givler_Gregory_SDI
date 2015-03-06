/*
 Gregory Givler
 3/6/15
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

//Random amount spent per week
var week1=123;
var week2=189;
var week3=220;
var week4=143;
var week5=183;
//Amount spent over 5 weeks
var total=week1+week2+week3+week4+week5;
//Average per week
var average=total/5;
//Added the total spent over 5 weeks and the average per week
console.log("You have spent a total of $"+total+" on groceries over 5 weeks. That is an average of $"+average+" per week");

/*
Discounts
 */

//Original Price
var oPrice=800;
//Discount Percentage
var discount=20/100;
//Discount text string
var discountP="20";
//Item
var item="laptop";
//Sales tax
var tax=7/100;
//Discounted Item without tax
var reduced=oPrice-(oPrice*discount);
//Discounted Item with tax
var taxOn=(oPrice*tax)+reduced;
//Added variables to the proper inside the text string.
console.log("Your "+item+" was originally $"+oPrice+", but after a "+discountP+"% discount, it is now $"+reduced+" without tax, and $"+taxOn+" with tax.");



