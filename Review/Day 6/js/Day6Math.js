/*
 Gregory Givler
 3/14/2015
 Section 00
 Day 6 Math
 */

//alert("Hello!");

//Math.round() - basic rounding .5 plus goes up and .499 and lower goes down.
var num1=9.544;
console.log(num1);
console.log(Math.round(num1));

//Math.floor() - Always rounds down if there is a decimal.
var num2=6.8;
console.log(num2);
console.log(Math.floor(num2));

//Math.ceil() - Always rounds up if there is a decimal.
var num3=4.15;
console.log(num3);
console.log(Math.ceil(num3));

//Math.random() - This returns a number between 0 and almost 1.
var num4=Math.random();
console.log(num4);

//Random number between 0 and 10
var num5=Math.random()*10;
console.log(num5);

//Random INTEGER between 0 and 100
var num6=Math.round(Math.random()*100);
console.log(num6);

//Random number between two numbers that does not start at zero.

//Math.random()*(max-min)+min
//Random number between 50 and 80
var num7=Math.round(Math.random()*(80-50)+50);
console.log(num7);

//Math Object Constant
//Area of circles = Radius * Radius *Pi
//Math.PI - true value of Pi
var radius=7;
var areaCircle=radius*radius*Math.PI;
//.toFixed() - rounds the number to the number of decimal places that matches the number inside the ().

console.log(areaCircle.toFixed(3));


