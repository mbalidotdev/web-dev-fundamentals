// FOR LOOP

for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// LOOPING IN REVERSE

for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// LOOPING THROUGH ARRAYS

const vacationSpots = ["Bali", "Paris", "Tulum"];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// NESTED LOOPS

let bobsFollowers = ["Joe", "Marta", "Sam", "Erin"];
let tinasFollowers = ["Sam", "Marta", "Elle"];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// WHILE LOOP

const cards = ["diamond", "spade", "heart", "club"];

let currentCard;

while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// DO WHILE STATEMENTS

let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded + " cup was added");
} while (cupsAdded < cupsOfSugarNeeded);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// BREAK KEYWORD

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}

console.log("And if you don't know, now you know.");

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
