// BLOCKS & SCOPE

const city = "New York City";
function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
}

console.log(logCitySkyline());

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// GLOABL SCOPE

let satellite = "The Moon";
let galaxy = "The Milky Way";
let stars = "North Star";

function callMyNightSky() {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
}

console.log(callMyNightSky());

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// BLOCK SCOPE

function logVisibleLightWaves() {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
}

console.log(logVisibleLightWaves());
console.log(
  lightWaves,
); /*will give an error since the variable is tied to the block scope of the function*/

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// GOOD SCOPING

const logSkyColor = () => {
  const dusk = true;
  let color = "blue";

  if (dusk) {
    let color = "pink";
    console.log(color); // Prints "pink"
  }

  console.log(color); // Prints "blue"
};

console.log(color); // throws a ReferenceError
