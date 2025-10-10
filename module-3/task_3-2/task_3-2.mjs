"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows*/

let txtPrintValue = "";
let txtPrintValueReverse = "";
for (let i = 1, j = 10; i <= 10; i++, j--) {
  txtPrintValue += i + " ";
  txtPrintValueReverse += j + " ";
}
printOut(txtPrintValue);
printOut(txtPrintValueReverse);

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for
example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the
"random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the
number once the "while" loop has completed. You do not need to print anything while the "while" loop is in
progress.*/

let guessedNumber = Math.floor(Math.random() * 60) + 1;
const myNumber = 45;

while (guessedNumber !== myNumber) {
  guessedNumber = Math.floor(Math.random() * 60) + 1;
}
printOut("Det riktige tallet er " + guessedNumber);
printOut(newLine);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Take the program from part 2 and expand it to guess a number between 1 and one million. Print the
number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the
Date.now() function to measure time.*/

let guessedNumberMillion = Math.floor(Math.random() * 1000000) + 1;
const myNumberMillion = 6741;
let numberOfGuesses = 0;
const startTime = Date.now();

while (guessedNumberMillion !== myNumberMillion) {
  guessedNumberMillion = Math.floor(Math.random() * 1000000) + 1;
  numberOfGuesses++;
}
const endTime = Date.now();
const timeTaken = endTime - startTime;

printOut("Det riktige tallet er " + guessedNumberMillion);
printOut(newLine);
printOut("Antall gjetninger: " + numberOfGuesses);
printOut(newLine);
printOut("Tid brukt (millisekunder): " + timeTaken);
printOut(newLine);
  
printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
