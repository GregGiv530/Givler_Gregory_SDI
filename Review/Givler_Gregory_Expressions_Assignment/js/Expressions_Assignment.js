/*
 Gregory Givler
 3/8/2015
 Section 00
 Lab Expressions
 */

alert("Wondering how much money you spend at the movies per year?");

//Monthly Movie Calculator
//This calculator will help the user figure out what the average monthly expenses are for going to the movies.

//Array for movie ticket and expenses text strings.
var ticket_items=["ticket","popcorn","drinks","candy","alone","people",12];

//Users will enter the amount of a single movie ticket.
var movieTicket=prompt("How much does a single movie "+ticket_items[0]+" cost?");
console.log(movieTicket);

//Users will enter if they go alone to the movies or with people.
var alone_people=prompt("Do you go to the movies "+ticket_items[4]+" or pay for "+ticket_items[5]+" to come? \n(If you go alone enter 1, if not enter \nthe number of people pay for.)");
console.log(alone_people);

//Users will enter the amount they spend on popcorn, drinks and candy.
var movieItems=prompt("How much money would you spend on "+ticket_items[1]+", "+ticket_items[2]+" \nand "+ticket_items[3]+"?");
console.log(movieItems);

//Users will enter the number of times they go to the movies a month.
var amountGone=prompt("How many times a month do you go to the movies?");
console.log(amountGone);

//Math formula for amount spent on tickets per peron and variable conversion.
movieTicket*=alone_people;
var ticketCost=movieTicket;

//Math formula for adding in cost of popcorn, drinks and candy.
var amountSpent=Number(ticketCost)+Number(movieItems);

//Math formula for amount spent per month.
amountSpent*=amountGone;

//Math formula for the total amount spent over the year.
var totalAmount=Number(amountSpent)*ticket_items[6];

//Math formula for original price of movie tickets.
ticketCost/=movieTicket

//Final results in a text string for the console and an alert for the user.
var results=("You said you spend $"+movieTicket+" on your "+ticket_items[0]+"/s \nand $"+Number(movieItems)+" on "+ticket_items[1]+", "+ticket_items[2]+" and "+ticket_items[3]+". \nYou also said you go to the movies "+amountGone+" times in a month. \nSo with the information you provided, over an entire year, \nyou will spend $"+totalAmount+" at the movies.");
console.log(results);
alert(results)




