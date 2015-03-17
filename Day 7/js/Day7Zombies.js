/*
 Gregory Givler
 3/17/2015
 Section 00
 Day 7 Zombies
 */

//alert("Hello!");

//Zombie Attack!!!
//We have accidentally created a zombie at full sail.
//A zombie can bite 4 people a day and turn them into zombies the next day.
//The CDC wants to know how many zombies there will be in 8 days?

//Given that we know.

//How many zombies do we have?
var numZombies=1;

//How many bites per zombie per day
var numBites=4;

//Number of day that the CDC wants.
var days=8;
/*
//Create for loop to calc zombie nnumber.
for(var i=1; i<=days; i++){
    //How many new zombies get made every day.
    var newZombies=numZombies*numBites;

    //Add the new zombies to our existing horde
    numZombies+=newZombies;

    //Console.log the results
    console.log("There are "+newZombies+" number of zombies on day #"+i+"!");
}
*/

//How long will is take to get a million zombies

var numDays=1;

while(numZombies<=1000000){
    //How many new zombies get made every day.
    var newZombies=numZombies*numBites;

    //Add the new zombies to our existing horde
    numZombies+=newZombies;

    //Console.log the results
    console.log("There are "+newZombies+" number of zombies on day #"+numDays+"!");

    numDays++
}
console.log("It will take "+(numDays-1)+" days to reach a million zombies.");