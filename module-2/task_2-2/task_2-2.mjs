"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let answer1 = (2 + 3 * 2 - 4 * 6);
let answerAlt = (2 + 3 * (2 - 4) * 6);
printOut("The answer to 2 + 3 * 2 - 4 * 6 is = " + answer1);
printOut("The answer to 2 + 3 * (2 - 4) * 6 is = " + answerAlt);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let meters = 25;
let centimeters = 34;
let millimeters = 25.4;
let inchesM = millimeters;
let inchesC = millimeters;

let answer2 = (meters / inchesM) * 1000 + (centimeters / inchesC) * 10;
let answer2Rounded = Math.round(answer2 * 100) / 100;
printOut("The answer to convert 25 meters and 34 centimeters to inches is = " + answer2Rounded + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const Days = 3;
const Hours = 12;
const Minutes = 14;
const Seconds = 45;
let DtM = Days * 60 * 24;
let Htm = Hours * 60;
let MtM = Minutes * 1;
let StM = Seconds / 60;

let answer3 = (DtM + Htm + MtM + StM);

printOut("3 days, 12 hours, 14 minutes and 45 seconds in minutes is = " + answer3 + " minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let TotalMinutes = 6322.52;

let Day = Math.floor(TotalMinutes / (60 * 24));
let DaysRounded = Math.floor(Day);
let rest1 = TotalMinutes - (DaysRounded * 60 * 24);

const Hour = Math.floor(rest1 / 60);
let rest2 = rest1 - (Hour * 60);

const Minute = Math.floor(rest2 / 1);
let rest3 = rest2 - (Minute * 1);

const Second = Math.round(rest3 * 60);

printOut("6322.52 minutes is: " + DaysRounded + " Days, " + Hour + " Hours, " + Minute + " Minutes, and " + Second + " Seconds! ");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

/* convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars". */

let USD = 54;
let NOKtoUSD = 8.6 / 76;
let USDtoNOK = 76 / 8.6;

let answer5NOK = Math.round(USD * USDtoNOK);
let answer5USD = Math.round(answer5NOK * NOKtoUSD);

printOut(USD + " USD is approximately " + answer5NOK + " NOK");
printOut(answer5NOK + " NOK is approximately " + answer5USD + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

/*Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."
● Print the number of characters in the text.
● Print the character at position number 19.
● Print the characters starting at position number 35 and 8 characters forward.
● Print the index at which "earth" starts in the text./*/

let text = "There is much between heaven and earth that we do not understand.";

let charCount = text.length;
let charAt19 = text.charAt(19);
let substring35 = text.substr(35, 8);
let indexOfEarth = text.indexOf("earth");

printOut("The number of characters in the text is: " + charCount);
printOut("The character at position number 19 is: " + charAt19);
printOut("The characters starting at position number 35 and 8 characters forward is: " + substring35);
printOut("The index at which 'earth' starts in the text is: " + indexOfEarth);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

/*Comparison, print the values for the following expressions (evaluate whether the statements are true):
● Is 5 greater than 3?
● Is 7 greater than or equal to 7?
● Is "a" greater than "b"?
● Is "1" less than "a"?
● Is "2500" less than "abcd"?
● "arne" is not equal to "thomas".
● (2 equals 5) is this statement true?
● ("abcd" is greater than "bcd") is this statement false?/*/

printOut("Is 5 greater than 3? " + (5 > 3));
printOut("Is 7 greater than or equal to 7? " + (7 >= 7));
printOut('Is "a" greater than "b"? ' + ("a" > "b"));
printOut('Is "1" less than "a"? ' + ("1" < "a"));
printOut('Is "2500" less than "abcd"? ' + ("2500" < "abcd"));
printOut('"arne" is not equal to "thomas". ' + ("arne" !== "thomas"));
printOut("(2 equals 5) is this statement true? " + (2 === 5));
printOut('("abcd" is greater than "bcd") is this statement false? ' + !("abcd" > "bcd"));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

/*Convert and print the following expressions:
● from text "254" to a number
● from text "57.23" to a number
● from text "25 kroner" to a number/*/

let num1 = Number("6");
let num2 = Number("7");
let num3 = parseInt("41");

printOut('The number from text "254" is: ' + num1);
printOut('The number from text "57.23" is: ' + num2);
printOut('The number from text "25 kroner" is: ' + num3);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor(Math.random() * 360) + 1;
printOut("Random number r (1 <= r <= 360): " + r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totalDays = 131;
let weeks = Math.floor(totalDays / 7);
let days = totalDays % 7;

printOut(totalDays + " days is " + weeks + " weeks and " + days + " days.");
printOut(newLine);