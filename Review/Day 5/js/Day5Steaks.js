/*
 Gregory Givler
 3/12/2015
 Section 00
 Day 5 Steaks
 */

//alert("Hello!");

//Test a steak temperature and tell user the done-ness level

/*
 Extra-rare or Blue 115–120 °F
 Rare 125–130 °F
 Medium rare 130–140 °F
 Medium 140–150 °F	145 °F
 Medium well 150–155 °F
 Well done 160 °F+
 */

//Create a variable for our steak temperature
var steakTemp=prompt("What is the temperature of your steak?");

//We have to test each of the cases above to see where our temp falls into.

if(steakTemp<115){
    console.log("Your steak is uncooked!");
} else if(steakTemp<125){
    console.log("Your steak is Extra-Rare or Blue.");
} else if(steakTemp<130){
    console.log("Your steak is Rare.");
} else if(steakTemp<140){
    console.log("Your steak is Medium-Rare.");
} else if(steakTemp<150){
    console.log("Your steak is Medium.");
} else if(steakTemp<155){
    console.log("Your steak is Medium Well.");
} else if(steakTemp<160){
    console.log("Your steak is Well Done.");
} else{
    console.log("Your steak is Burnt.");
}



