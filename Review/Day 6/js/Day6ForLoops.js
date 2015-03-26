/*
 Gregory Givler
 3/14/2015
 Section 00
 Day 6 For loops
 */

//alert("Hello!");

//for(initialization;condition;increment of change) {}
//We use i ALOT in loops - because it stands for iteration timer around
for(var i=0;i<20;i++){
    console.log("The value of i "+i);
}
console.log(i);

//Break in a loop
for(var j=0;j<5;j++){
    //Conditional to test if we should break the loop
    //If the value of j is 3, then console.log something different and stop the loop
    if(j===3){
        //Stop the loop but first console.log out
        console.log("J is 3");
        break;
    }
    console.log("The value of j is "+j);
}

//Specific cases for each value
for(var k=0;k<3;k++){
    if(k===0){
        console.log("The value is zero.");
    } else if(k===1){
        console.log("The value is one.");
    } else if(k===2){
        console.log("The value is two.")
    }
}