/*
 Gregory Givler
 3/17/2015
 Section 00
 Day 7 Beer
 */

//alert("Hello!");

//Code the song 99 Bottles of beer on the wall.

//Basic structure of for loop.
//for(var i=0; condition to test; increment of change){}

for(var i=99;i>0;i--) {
    if(i===1){
        console.log("1 bottle of beer on the wall. 1 bottle of beer. Take one down and pass it around. No more bottles of beer on the wall.\nThe end.")
    } else{
        console.log(i+" bottles of beer on the wall. "+i+" bottles of beer. Take one down and pass it around. "+(i-1)+" bottles of beer on the wall.")
    }
}


