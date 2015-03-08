/*
 Gregory Givler
 3/7/2015
 Section 00
 Lab Expressions
 */

//alert("Hello!");

//Monthly Movie Calculator
//This calculator will help the user figure out what the average monthly expenses are for going to the movies.

//Array for movie ticket and expenses text strings.
var ticket_items=["ticket","popcorn","drinks","candy","alone","people"];

//Users will enter the amount of a single movie ticket.
var movieTicket=prompt("How much do you spend in a year at the movies? \nHow much does a single movie "+ticket_items[0]+" cost?");
console.log(movieTicket);

//Users will enter if they go alone to the movies or with people.
var alone_people=prompt("Do you go to the movies "+ticket_items[4]+" or with "+ticket_items[5]+"? \n(If you go alone enter 1, if not enter \nthe number of people you go with.)");
console.log(alone_people);

//Users will enter the amount they spend on popcorn, drinks and candy.
var movieItems=prompt("How much money would you spend on "+ticket_items[1]+", "+ticket_items[2]+" \nand "+ticket_items[3]+"?");
console.log(movieItems);

//Users will enter the number of times they go to the movies a month.
var amountGone=prompt("How many times a month do you go to the movies?");
console.log(amountGone);

//Math formula for amount spent on tickets per peron.
movieTicket*=alone_people;
var ticketCost=movieTicket;

//Math formula for adding in cost of popcorn, drinks and candy.
var amountSpent=Number(ticketCost)+Number(movieItems);
console.log(amountSpent);

//Math








