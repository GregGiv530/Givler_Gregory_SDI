/*
 Gregory Givler
 3/26/2015
 Section 00
 Day 9 Pizza
 */

//alert("Hello!");

//Figure out how much pizza costs per slice and cost per sq in

//Prompt the user for the radius of the pizza
var pizzaRadius=prompt("Welcome, let's calculate the cost of your pizza! What is the radius of your pizza?");

//Validate
while(pizzaRadius===""||isNaN(pizzaRadius)){
    //Reprompt
    pizzaRadius=prompt("Please do not leave blank and only use numbers.\nWhat is the radius of your pizza?");
}

//Prompt the user for cost of the pizza
do{
    var pizzaCost=prompt("How much does your pizza cost in total?\nReminder please do not leave blank and only use numbers.");
} while(pizzaCost===""||isNaN(pizzaCost));

//Prompt the user for how many slices are in their pizza
do{
    var pizzaSlices=prompt("How many slices are in your pizza?\nReminder only use numbers and do not leave blank.");
} while(pizzaSlices===""||isNaN(pizzaSlices));

//Function cal to lordFunction
var results=lordFunction(pizzaRadius,pizzaCost,pizzaSlices);

//Console.log info to user
console.log("Your pizza costs $"+results[0]+" per sq inch or $"+results[1]+" per slice.");

//Create a function that will run all of the other functions
function lordFunction(radius,cost,slices){
    //Function will call the other 3 functions and then return the values
    //Call the area function and capture the answer
    var area=pizzaArea(radius);
    //Call the function for square in
    var areaCost=pizzaSquareInCost(area,cost);
    //Call the slice per price function
    var slicePrice=pricePerSlice(slices,cost);
    //Return these answers to our main code
    return [areaCost,slicePrice];
}

//Function that calculates the area of pizza
function pizzaArea(r){
    //area=r*r*Pi
    var area=r*r*Math.PI;
    return area;
}

//Function that calculates the price per square in of pizza
function pizzaSquareInCost(area,price){
    //price/area
    var costPerSqIn=price/area;

    //We should round this number to 2 decimal places
    costPerSqIn=costPerSqIn.toFixed(2);
    return costPerSqIn;
}

//Function that calculates the price per slice
function pricePerSlice(slices,price){
    //price/slices
    var costPerSlice=price/slices;
    //Round to 2 decimals
    costPerSlice=costPerSlice.toFixed(2);
    return costPerSlice;
}




