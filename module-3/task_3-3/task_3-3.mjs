"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

function printTodayInNorwegian() {

const today = new Date();
const norwegianDate = today.toLocaleDateString("no-NB", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    printOut(norwegianDate.charAt(0).toUpperCase() + norwegianDate.slice(1));

}
printTodayInNorwegian();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

/* Funksjonen som regner antall dager igjen til lanseringen av 2XKO*/

function calculateDaysUntilLaunch() {
    const releaseDate = new Date ("2026, 4, 14");
    const today = new Date();
    const difference = releaseDate - today;
    const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
    printOut("Det er " + daysLeft.toString() + " dager igjen til lanseringen av 2XKO!");
    return daysLeft;
}

function displayDateAndCountdown() {
    printOut("Dagens dato:");
    printTodayInNorwegian();
    calculateDaysUntilLaunch();
    printOut(newLine);
}

displayDateAndCountdown();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateCirclePropities(radius) {
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);

    printOut("Diameter: " + diameter);
    printOut("Omkrets: " + circumference.toFixed(0));
    printOut("Areal: " + area.toFixed(0));
}

calculateCirclePropities(5);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateRectangleProperties(rectangle) {
    const width = rectangle.width;
    const height = rectangle.height;

    const area = width * height;
    const circumference = 2 * (width + height);

    printOut("Areal: " + area);
    printOut("Omkrets: " + circumference);
}

calculateRectangleProperties({ width: 4, height: 7 });

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Convert 47 celsius")
function convertTemperature(temp, tempType) {
    let celsius, fahrenheit, kelvin;

    if (tempType === "C") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
    } else if (tempType === "F") {
        fahrenheit = temp;
        celsius = (temp - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (tempType === "K") {
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    printOut("Celsius: " + celsius);
    printOut("Fahrenheit: " + fahrenheit);
    printOut("Kelvin: " + kelvin);

}

convertTemperature(47, "C");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateNetPrice(gross, vatGroup) {
    const vatRates = {
        normal: 25,
        food: 15,
        hotel: 10,
    };

        const vat = vatRates [vatGroup.toLowerCase()];
        if (vat === undefined) {
            printOut(`${vatGroup} er ikke gyldig`);
            return;
        }
 
        const netPrice = (100 *gross) / (100 + vat);
        printOut(`${gross} er ${netPrice.toFixed(2)} uten moms`);

       
}

 const testCases = [
            { gross: 100, group: "normal" },
            { gross: 150, group: "food" },
            { gross: 50, group: "hotel" },
            { gross: 75, group: "clothes" },
        ];


testCases.forEach(({ gross, group }) => {
    calculateNetPrice(gross, group);
});

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateSpeedDistanceTime(speed, distance, time) {
    const missingParams = [speed, distance, time].filter(param => param === undefined).length;

    if (missingParams > 1) {
        return NaN;
    }

    if (speed === undefined) {
        
        if (distance !== undefined && time !== undefined && time !== 0) {
            return distance / time; // Calculate speed
        }
    } else if (time === undefined) {
        
        if (distance !== undefined && speed !== undefined && speed !== 0) {
            return distance / speed; // Calculate time
        }
    } else if (distance === undefined) {
        
        if (speed !== undefined && time !== undefined) {
            return speed * time; // Calculate distance
        }
    }

    return NaN;
}

const testCases2 = [
    { speed: 75, distance: 50, time: undefined },      // Calculate time
    { speed: 60, distance: 120, time: undefined },     // Calculate time
    { speed: 70, distance: 105, time: undefined },     // Calculate time
    { speed: undefined, distance: 50, time: NaN },     // Calculate speed with missing time
];

testCases2.forEach(({ speed, distance, time }) => {
    const result = calculateSpeedDistanceTime(speed, distance, time);
    if (time === undefined) time = result.toFixed(2); // Format time as two decimal places if calculated
    if (speed === undefined) speed = result.toFixed(2); // Format speed as two decimal places if calculated

    printOut(`Speed = ${speed === undefined ? 'undefined' : speed} km/h`);
    printOut(`Distance = ${distance} km`);
    printOut(`Time = ${time === undefined ? 'NaN' : time} h\n`);
    printOut(newLine);
});

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function createText(text, maxSize, char, insertAtEnd) {
    if (text.length < maxSize && insertAtEnd === true) {
        let placeholder = "";
        while (text.length + placeholder.length < maxSize)
            {
                placeholder += char;
            }

            text = placeholder + text;

    }

    else if(text.length < maxSize && insertAtEnd === false)
        {
            let placeholder = "";

            while (text.length+ placeholder.length > maxSize)
                {   
                    placeholder += char;
                }
    

        text = text + placeholder;
        }
        else
        {
            return text;
        }

       return text;
    }

let modText1 = createText("this is a text",60, "\u00A0", false);
let modText2 = createText("this is a text",60, "\u00A0 ", true);

printOut(modText1);
printOut(modText2);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function checkMathExpressions(lines) {
    let num = 1;  // Starting number

    for (let i = 1; i <= lines; i++) {
        
        let leftSideElements = i + 1;   // Left side starts with 2 elements and grows
        let rightSideElements = i;      // Right side starts with 1 element and grows

        
        let leftSideNumbers = Array.from({ length: leftSideElements }, (_, index) => num + index);
        let rightSideNumbers = Array.from({ length: rightSideElements }, (_, index) => num + leftSideElements + index);

        
        let leftSum = leftSideNumbers.reduce((acc, val) => acc + val, 0);
        let rightSum = rightSideNumbers.reduce((acc, val) => acc + val, 0);

        
        printOut(leftSideNumbers.join(" ") + " = " + rightSideNumbers.join(" "));

        
        if (leftSum !== rightSum) {
            printOut("Error: The two sides are not equal in line " + i);
            return;  
        }

        
        num += leftSideElements + rightSideElements;
    }

    
    printOut("Mathematics is fun!");
}

checkMathExpressions(200);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function factorial(n) {
    if (n <= 1) return 1;     
    return n * factorial(n - 1);  
}

// Example usage

let number = 9;
let result = factorial(number).toString();

printOut("factorial(" + number + ") is " + result);              


printOut(newLine);
