"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

printOut("Lengde = " + part1Array.length + ", Verdi = " + part1Array[part1Array.length - 1]);

let part1Text = "";
for (let i = 0; i < /*20*/ part1Array.length; /*i++*/ i = i + 1) {
    const value = part1Array[i]; // -> Hent verdi fra array
    part1Text += value + " ";    // -> Legg til verdi i tekststreng
} else {


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(numbers.join(", "));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const part3Greeting = "Hello there, how are you?";
const greetingArray = part3Greeting.split(" ");
const part3Text = "";
for (let i = 0; i < greetingArray.length; i++) {
    const word = greetingArray[i];
    part3Text += "index: " + i.soString() + " = " + word + newLine;
}
printOut(part3Text);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeNameFromArray(aArray, aName) {
    for (let i = 0; i < aArray.length; i++) {
        const name = aArray[i];
        let deleteIndex = -1;
        if (name === aName) {
            // Her kan vi slette elementet for eksempel "Hide"
            // Dette gjør vi ikke her! Her løper vi igjen, og må slette senere.
            // Vi må lage indeksen i en variaebel.
            deleteIndex = i;
        }
    }
    // Teste om jeg kan slette
    if (deleteIndex >= 0) {
        printOut(aName + " is found, and detected.");
    }else{
        printOut(aName + " is not found.");
    } 
}

removeNameFromArray(girls, "Guro");
printOut(girls);

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
