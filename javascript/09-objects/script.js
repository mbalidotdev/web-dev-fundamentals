// OBJECT LITERALS

let fasterShip = {
  "Fuel Type": "Turbo Fuel",
  color: "silver",
};

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// ACCESSING PROPERTIES

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

let crewCount = spaceship.numCrew;

let planetArray = spaceship.flightPath;

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// BRACKET NOTATION

let spaceships = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let propName = "Active Mission";

let isActive = spaceships["Active Mission"];

console.log(spaceships[propName]);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// PROPERTY ASSIGNMENT

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

// METHODS

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

alienShip.retreat();

alienShip.takeOff();

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// NESTED OBJECTS

let spaceshipsss = {
  passengers: [{ name: "Space Dog" }],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

let capFave = spaceshipsss.crew.captain["favorite foods"][0];

let firstPassenger = spaceshipsss.passengers[0];

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
