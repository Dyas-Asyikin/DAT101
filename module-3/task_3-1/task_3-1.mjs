"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/

/*● Part 1
Complete the given "if" in the task_3-3.mjs file at part 1, statement so that it matches this: If I wake up at
exactly 7 o'clock then I can catch the bus to school. Run the program with different values of wake-up time
(6, 7, 8).
Print out to the HTML page the expression statement you made.
● Part 2
Extend part 1 to match this "if" and "else" statement: "If I wake up at exactly 7 o'clock, I can take the bus to
school, otherwise I have to take the car to school". Run the program with different values of wake-up time
(6, 7, 8).
● Part 3
Extend part 2 to expand more options: “If I wake up at exactly 7 o'clock, I can take the bus to school,
otherwise if I wake up exactly at 8 o'clock, I can take the train to school, otherwise I have to take the car to
school”. Run the program with a different value of wake-up time (7, 8). */

printOut("Task 1, 2 and 3");
printOut(newLine);
let wakeUpTime;
wakeUpTime = Math.floor(Math.random() * 3) + 6;

if (wakeUpTime === 7) {
  printOut("If I wake up at exactly 7 o'clock then I can catch the bus to school.");
} else if (wakeUpTime === 8) {
  printOut("If I wake up at exactly 8 o'clock then I can catch the train to school.");
} else {
  printOut("I have to take the car to school.");
}

printOut(newLine);
printOut("if I woke up at: " + wakeUpTime + " o'clock then i have to take the the bus to school");
printOut(newLine);    

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

/* ● Part 4
Write an if statement that checks whether an integer variable is negative or positive, print the text
"Positive" or "Negative" accordingly. Run the program with different types of values for the variable to
check the if statement.
● Part 5
Change part 4 to print “Positive”, “Negative” or “Zero” accordingly. Run the program with different types of
values for the variable to check the "if" statement. */

let number = Math.floor(Math.random() * 21) - 10; // Generates a number between -10 and 10

if (number > 0) {
    printOut("Positive");
} else if (number < 0) {
    printOut("Negative");
} else {
    printOut("Zero");
}

printOut("Tested value: " + number);
printOut(newLine);



printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Imagine you have a photo editing profession. And you have a website where people can upload pictures
for you to work on. However, the images must be 4MP or larger, if they are smaller, you cannot use them.
Create a variable that holds a generated random integer between 1 and 8 (inclusive). Use this variable to
simulate the uploaded image size and print it. Then create an if statement that prints out “Thank you” if the
size is equal to or greater than the limit. Otherwise, print out "The image is too small"*/

let imageSize = Math.floor(Math.random() * 8) + 1; // Generates a number between 1 and 8
printOut("Uploaded image size: " + imageSize + "MP");

if (imageSize >= 4) {
    printOut("OK!.");
}

else if (imageSize < 4) {
    printOut("Bildet er for lite.");
}

else { (imageSize < 1)
    printOut("Ugyldig bilde størrelse.");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Expand part 6 to exclude if the image size is larger or equal to 6MP, then print out “Image is too large”.*/

let imageSize2 = Math.floor(Math.random() * 8) + 1; // Generates a number between 1 and 8
printOut("Uploaded image size: " + imageSize2 + "MP");

if (imageSize2 >= 6) {
    printOut("OK!.");
}

else if (imageSize2 < 5) {
    printOut("Bildet er for lite.");
}

else { (imageSize2 < 1)
    printOut("Ugyldig bilde størrelse.");
}


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Print if monthName contains “r”: “You must take vitamin D” else “You do not need to take vitamin D”*/

const monthList =["January", "February", "March", "April", "May",
"Jun", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("Current month: " + monthName);

if (monthName.includes("r")) {
    printOut("Du må ta vitamin D!");
} else {
    printOut("Du må ikke ta vitamin D!");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!
Expand exercise 8 to print how many days there are in the current month. And do not use date object.*/

const monthList2 =["January", "February", "March", "April", "May",
"Jun", "July", "August", "September", "October", "November", "December"];
const noOfMonth2 = monthList.length;
const monthName2 = monthList[Math.floor(Math.random() * noOfMonth)];
let daysInMonth;

printOut("Current month: " + monthName2);

if (monthName2 === "January" || monthName2 === "March" || monthName2 === "May" || monthName2 === "July" || monthName2 === "August" || monthName2 === "October" || monthName2 === "December") {
    daysInMonth = 31;
} else if (monthName2 === "April" || monthName2 === "June" || monthName2 === "September" || monthName2 === "November") {
    daysInMonth = 30;
} else if (monthName2 === "February") {
    daysInMonth = 28; 
} else {
    daysInMonth = "Ukjent måned";
}

printOut("Dager i måneden: " + daysInMonth);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!
Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from
March through May, but in April you have temporary premises in the building next door. Use the month
constant in exercise 8 to inform the status of your gallery in that month.*/

const monthList3 =["January", "February", "March", "April", "May",
"Jun", "July", "August", "September", "October", "November", "December"];
const noOfMonth3 = monthList.length;
const monthName3 = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("Current month: " + monthName3);

if (monthName3 === "March" || monthName3 === "May") {
    printOut("The gallery is closed for refurbishment.");
  }  else if (monthName3 === "April") {
        printOut("We have temporary premises in the building next door.");}
      else if (monthName3 !== "January" || monthName3 !== "February" || monthName3 !== "June" || monthName3 !== "July" || monthName3 !== "August" || monthName3 !== "September" || monthName3 !== "October" || monthName3 !== "November" || monthName3 !== "December")
        printOut("We are open!");

printOut(newLine);
