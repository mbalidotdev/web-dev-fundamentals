// ITERATORS

const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];

artists.forEach((artist) => {
  console.log(artist + " is one of my favorite artists.");
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map((number) => {
  return number * number;
});

console.log(squareNumbers);

const things = ["desk", "chair", 5, "backpack", 3.14, 100];

const onlyNumbers = things.filter((thing) => {
  return typeof thing === "number";
});

console.log(onlyNumbers);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// FOR EACH METHOD()

const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below
fruits.forEach((fruit) => console.log(`I want to eat a ${fruit}.`));

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// .MAP METHOD()

const animals = [
  "Hen",
  "elephant",
  "llama",
  "leopard",
  "ostrich",
  "Whale",
  "octopus",
  "rabbit",
  "lion",
  "dog",
];

// Create the secretMessage array below
const secretMessage = animals.map((animal) => animal[0]);

console.log(secretMessage.join(""));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map((num) => num / 100);

console.log(smallNumbers);
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// .FILTER METHOD()

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumberss = randomNumbers.filter((num) => {
  return num < 250;
});

const favoriteWords = [
  "nostalgia",
  "hyperbole",
  "fervent",
  "esoteric",
  "serene",
];

// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter((word) => {
  return word.length > 7;
});

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// .FIND INDEX METHOD()

const animalss = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animalss.findIndex((animal) => {
  return animal === "elephant";
});

const startsWithS = animalss.findIndex((animal) => {
  return animal[0] === "s" ? true : false;
});

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// .REDUCE METHOD()

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log("The value of accumulator: ", accumulator);
  console.log("The value of currentValue: ", currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// PASS BY REFERENCE

let spaceshipssss = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};

let remotelyDisable = (obj) => {
  obj.disabled = true;
};

greenEnergy(spaceshipssss);

remotelyDisable(spaceshipssss);

console.log(spaceshipssss);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// LOOPING THROUGH OBJECTS

let sspaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

for (let crewMember in sspaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

for (let crewMember in sspaceship.crew) {
  console.log(
    `${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`,
  );
}

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// THIS KEYWORD

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  },
};

console.log(robot.provideInfo());

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// ARROW FUNCTION AND THIS

const robots = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`);
  },
};

robots.checkEnergy();

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// PRIVACY

const rRobot = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

rRobot._energyLevel = "high";
rRobot.recharge();

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// GETTERS

const rBobot = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return "My current energy level is " + this._energyLevel;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

console.log(rBobot.energyLevel);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// SETTERS

const rSobot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

rSobot.numOfSensors = 100;
console.log(rSobot.numOfSensors);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// FACTORY FUNCTIONS

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

const tinCan = robotFactory("P-500", true);
tinCan.beep();

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// PROPERTY VALUE SHORTHAND

const robotFactoryy = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

// To check that the property value shorthand technique worked:
const newRobot = robotFactoryy("P-501", false);
console.log(newRobot.model);
console.log(newRobot.mobile);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// DESTRUCTURED ASSIGNMENT

const rBot = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop");
    },
    fireLaser() {
      console.log("Pew Pew");
    },
  },
};

const { functionality } = rBot;

functionality.beep();

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// BUILT IN OBJECT METHODS

const robotso = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};

// What is missing in the following method call?
const robotKeys = Object.keys(robotso);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robotso);
console.log(robotEntries);

// Declare newRobot below this line:
const newRobotso = Object.assign(
  { laserBlaster: true, voiceRecognition: true },
  robotso,
);

console.log(newRobotso);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
