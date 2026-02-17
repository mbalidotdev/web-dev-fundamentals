// IF ELSE STATEMENTS

let country = "Portugal";
let continent = "Europe";
let population = 10; // population in millions

// Check if the country's population is above the average (33 million)
if (population > 33) {
  // If population is greater than 33, log that it's above average
  console.log(`${country}'s population is above average`);
} else {
  // If population is 33 or less, calculate how many millions below average
  console.log(
    `${country}'s population is ${33 - population} million below average`,
  );
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// LOGICAL OPERATORS

// AND operator checks if both conditions are true

if (stopLight === "green" && pedestrians === 0) {
  console.log("Go!");
} else {
  console.log("Stop");
}

// OR operator checks if at least one condition is true

if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Do some work.");
}

// NOT operator reverses the BOOLEAN value

let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// TRUTHY AND FALSY

// truthy example
let myVariable = "I Exist!";

if (myVariable) {
  console.log(myVariable);
} else {
  console.log("The variable does not exist.");
}

// falsy example
let numberOfApples = 0;

if (numberOfApples) {
  console.log("Let us eat apples!");
} else {
  console.log("No apples left!");
} // Prints: 'No apples left!'

// TERNARY OPERATOR

let isNightTime = true;

if (isNightTime) {
  console.log("Turn on the lights!");
} else {
  console.log("Turn off the lights!");
}

// using ternary operator
isNightTime
  ? console.log("Turn on the lights!")
  : console.log("Turn off the lights!");

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// SWITCH KEYWORD

// normally
let groceryItem = "papaya";

if (groceryItem === "tomato") {
  console.log("Tomatoes are $0.49");
} else if (groceryItem === "papaya") {
  console.log("Papayas are $1.29");
} else {
  console.log("Invalid item");
}

// using switch statement
let groceryIttem = "papaya";

switch (groceryIttem) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default:
    console.log("Invalid item");
    break;
} // Prints 'Papayas are $1.29'
