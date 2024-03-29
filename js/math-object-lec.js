"use strict";

let inputString = "Trick or Treat";
let inputArray = inputString.split('');

// Display each string in the array
inputArray.forEach(function(element, index){
    console.log("[" + index + "] " + element);
});

// ********** Math Methods ********** //

//Math.random()

//var mathComputations = new Math(); // Don't do this!
let randomNum = Math.random() * 2;
console.log(randomNum);


// Math.round()

// we can't use a decimal when referring to an array index, so let's round it to the nearest integer
let index = Math.round(randomNum);
console.log("Normal rounding: " + index);



// Math.floor()
index = Math.floor(randomNum);
console.log("Rounding down: " + index);

// Math.ceil()

// If we want to round UP, no matter what the decimal place is, we use Math.ceil()
// i.e. 0.000000001 => 1
// i.e. 3.0000000000001 => 4
// i.e. 3.9999999999999 => 4

index = Math.ceil(randomNum);
console.log("Rounding up (with ciel): " + index);
// randomWord = inputArray[index];
// console.log(randomWord);



// create a new situation where we'll be adding a constant to our random number

// say we wanted a random number between 74 and 186
let numBetween = Math.ceil(Math.random() * 74) + 112;
console.log("Using 74 as random base, and adding 112: " + numBetween);


// we could do the exact same thing by flipping the numbers
numBetween = Math.ceil(Math.random() * 112) + 74;
console.log("Using 112 as a random base, and adding 74: ");


// 0.7 * 74 = 51.8
// 51.8 + 112 = 163.8

// 0.000000001 * 74 = 1
// 1 + 112 = 113

// 0.999999999 * 74 = 74 + 112 = 186

// once we have that integer, let's choose a random string from our halloween array
let randomWord = inputArray[index];
console.log(randomWord);


// Math.pow()

// This is used to raise one number to the power of another number
// i.e. 4 ^ 2 = 16
// i.e. 8 ^ 3 = 512
let exponentResult = Math.pow(4,2);
console.log("4 squared (or 4^2) = " + exponentResult)


// What is another way we could find 8^x power? (hint: using a loop)
let base = 8;
let exponent = 6;
let result = base;
for (let i=0; i<exponent; i++){
    // 8, 8*8=64, 8*8*8=64*8
    result = result * base; // when i=0, result = 8 * 8(base)
                            // when i=1, result = 64 * 8(base)
                            //when i=2, result = 512 * 8(base)
}


console.log(base + " to the " + exponent + " power = " + result);


// Math.sqrt()

console.log("The square root of 16 is = " + Math.sqrt(16));
console.log("The square root of 64 = " + Math.sqrt(64));


// ********** Constants ********** //

// Math.PI
// π is used to calculate the circumference and area of a circle - can also be used to
// get the diameter / radius of a circle, when you only have the circumference or area of said circle
// Circumference = 2 * π * r = π * D(diameter)º
// alt + shift + 8 = °

// let's find the circumference of a circle with a diameter of 5
let circumference = Math.PI * 5;
console.log("Cicumference of a circe with diameter of 5 = " + circumference);

// let's also find that circle's area
// Area of a Circle = π*r^2
let area = Math.PI * Math.pow(2.5, 2); // π * 2.5^2
console.log("Area of a circle with a diameter of 5 = " + area.toFixed(3));

// Math.E
console.log("Euler's constant is equal to: " + Math.E);








// Pre-exercise warmup:

// Write a method to find a random number within a range of 2 numbers
// (min and a max)
// HINT: the min and max should be passed into the method as parameters



// randomNUM = random # between 500 - 1000
let randomNUM = Math.ceil(Math.random() * 500) + 500;
console.log(randomNUM);















