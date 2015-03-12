/*
 Gregory Givler
 3/12/2015
 Section 00
 Day 5 Nesting ifs
 */

//alert("Hello!");

//Some decisions affect other decisions

//If it is warm lets go to the beach, if it is not then lets go to the movies.

//Get temperature
var temp=75;

//Lets set the water temperature
var waterTemp=78;

if(temp>=80){
    console.log("Let's go to the beach.");

    if(waterTemp>75){
        console.log("Let's go swimming!");
    } else{
        console.log("Let's get a tan!")
    }

} else{
    console.log("Let's go to the movies.");
    //Do we have any kids in the group
    var kids="yes";
    //Test if we have kids
    if(kids==="no"){
        console.log("Let's see 50 Shades of Gray!");
    } else{
        console.log("Let's go see Sponge Bob!");
    }
}


/*
//If the water temperature is above 75, let go swimming, if not lets get a tan.

if(waterTemp>75){
    console.log("Let's go swimming!");
} else{
    console.log("Let's get a tan!")
}
*/


