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
var totalOranges=orangesPicked[0]+orangesPicked[1]+orangesPicked[2]
console.log("The total number of oranges picked is "+totalOranges+".");

var averageOranges = totalOranges/3
console.log("The average number of oranges picked per day is "+averageOranges+".");



