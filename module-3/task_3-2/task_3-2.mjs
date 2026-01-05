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
/* Put your code below here!
Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.*/

let stringBuilder   = "";
for (let number = 2; number < 200; number++) {
    let isPrime = true;
    
    let factor = 2;
    while(factor <= Math.sqrt(number)) {
        if (number % factor === 0) {
            isPrime = false;
            break;
        }
        factor++;
    }
    if (isPrime) {
        stringBuilder += number.toString() + " ";
    }

}
if (stringBuilder !== "") {
    stringBuilder = stringBuilder.substring(0, stringBuilder.length - 2); // Fjerner siste komma og mellomrom
}
printOut(stringBuilder);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Create two loops that print 9 columns and 7 rows with the text "K1, R1" for the first cell, "K2, R1" for the
second cell, and so on.*/

for (let row = 1; row <= 7; row++) {
    let line = "";
    
    for (let col = 1; col <= 9; col++) {
        line += "K" + col + "R" + row + " ";
    }
    
    printOut(line);
}
printOut(newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive).
For each grade, print the student's grade (A to F) based on the point distribution provided:
○ A: 89% – 100%
○ B: 77% – 88%
○ C: 65% – 76%
○ D: 53% – 64%
○ E: 41% – 52%
○ F: 0% – 40%
Sorting Challenge (Bonus): Sort and print the 5 grades in descending order (from A to F) without using
an array. You can use a for loop and a do/while loop to achieve this.
Hint for Success: If you successfully complete the sorting challenge, you'll unlock a valuable hint for Part
9 of "DAT101: Mandatory assignment 4.1" that will make it easier to solve. The learning outcomes remain
the same, but this hint will give you a head start!*/

for (let students = 1; students <= 5; students++) {

    let grade = Math.floor(Math.random() * 236) + 1;
    let percentage = (grade / 236) * 100;

    let letterGrade;
    if (percentage >= 89) {
        letterGrade = "A";
    } else if (percentage >= 77) {
        letterGrade = "B";
    } else if (percentage >= 65) {
        letterGrade = "C";
    } else if (percentage >= 53) {
        letterGrade = "D";
    } else if (percentage >= 41) {
        letterGrade = "E";
    } else {
        letterGrade = "F";
    }

    printOut("Student " + students + ": Grade " + grade + " (" + letterGrade + ")");
}


printOut(newLine);

printOut("--- Part 7.1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Simulate 6 dice and print how many "throws" it takes to get:
● 1 2 3 4 5 6 (full straight)*/

let count = 0;
while (true) {

    const die1 = Math.floor(Math.random() * 6) + 1;
    
    const die2 = Math.floor(Math.random() * 6) + 1;
    
    const die3 = Math.floor(Math.random() * 6) + 1;
    
    const die4 = Math.floor(Math.random() * 6) + 1;
    
    const die5 = Math.floor(Math.random() * 6) + 1;

    const die6 = Math.floor(Math.random() * 6) + 1;

let target = 1;
let straight1 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;
target++;
let straight2 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;
target++;
let straight3 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;
target++;
let straight4 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;
target++;
let straight5 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;
target++;
let straight6 = dice == target || dice2 == target || dice3 == target || dice4 == target || dice5 == target || dice6 == target;

count++;

if (straight1 && straight2 && straight3 && straight4 && straight5 && straight6) {
    printOut("It took " + count + " throws to get a full straight (1-6).");
    break;
}
}

printOut(newLine);

printOut("--- Part 7.2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Simulate 6 dice and print how many "throws" it takes to get:
● 3 pairs*/

let count2 = 0;
while (true) {
    let diceArray = [];
    for (let i = 0; i < 6; i++) {
        const die = Math.floor(Math.random() * 6) + 1;
    }

    let pairs = 0;
    for (let i = 1; i <= 6; i++) {
        let count = 0;
        for (let j in diceArray) {
            let dice = diceArray[j];
            if (dice === i) {
                count++;
            }
        }
        pairs += Math.floor(count / 2);
    }

    count2++;

    if (pairs == 3) {
        printOut(diceArray.toString);
        printOut("It took " + count2 + " throws to get 3 pairs.");
        break;
    }
}

printOut(newLine);