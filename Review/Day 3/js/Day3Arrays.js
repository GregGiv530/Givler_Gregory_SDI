/*
Gregory Givler
3/7/2015
Section 00
Day 3 Arrays
 */

//alert("Testing to make sure it is linked.");

//Create a basic array
var avengersNames=["Thor","Hulk","Iron Man","Captain America"];

//Print out whole array
console.log(avengersNames);

//Print out one specific item in the array.
console.log(avengersNames[2]);

//Swap items in our array
avengersNames[1]="Black Widow";

console.log(avengersNames);

//Use a variable for the for the index number
var num=2;
console.log(avengersNames[num]);

//Find the length of an array
//Length Property - how many item are in the array.
//Dot Syntex - fancy for use a period
console.log(avengersNames.length);

//Add an item to our array
avengersNames[4]="Hawkeye";

avengersNames[avengersNames.length]="Wolverine";

console.log(avengersNames);

//Picking Oranges
var orangesPicked=[13,350,1000];

//How many oranges did we pick in total
var totalOranges=orangesPicked[0]+orangesPicked[1]+orangesPicked[2];
console.log("The total number of oranges picked is "+totalOranges+".");
//Added .length instead of hard coding the array length
var averageOranges = totalOranges/orangesPicked.length;
//Rounded the number to only show the integer of number of oranges pick
averageOranges=Math.round(averageOranges);
console.log("The average number of oranges picked per day is "+averageOranges+".");

//Create an array of fruit
var fruitBowl=["apple","mango","grape","banana"];
console.log(fruitBowl);

//push - adds items to the next open spot
// dot syntex - use a period
fruitBowl.push("strawberry");
console.log(fruitBowl);

fruitBowl.push("pineapple");
console.log(fruitBowl);

//pop() - removes the last item from the array
// - it also returns the item
var caughtItem=fruitBowl.pop();

console.log(fruitBowl);
console.log(caughtItem);




