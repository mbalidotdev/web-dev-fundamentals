// FUNCTION DECLARATION

function gamePlayer() {
  console.log("Hey, want to play?");
}

// --------------------------------------------------------------------
// --------------------------------------------------------------------

// CALLING A FUNCTION

gamePlayer();

// --------------------------------------------------------------------
// --------------------------------------------------------------------

// PARAMETERS AND ARGUMENTS

function sayThanks(name) {
  console.log(
    "Thank you for your purchase, " + name + "! We appreciate your business.",
  );
}

sayThanks("Cole");

// --------------------------------------------------------------------
// --------------------------------------------------------------------

// DEFAULT PARAMETERS

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

// --------------------------------------------------------------------
// --------------------------------------------------------------------

// RETURN

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

// --------------------------------------------------------------------
// --------------------------------------------------------------------

// HELPER FUNCTIONS

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

// --------------------------------------------------------------------
// --------------------------------------------------------------------

// FUNCTION EXPRESSION

const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

plantNeedsWater("Tuesday");

console.log(plantNeedsWater("Tuesday"));

// --------------------------------------------------------------------
// --------------------------------------------------------------------

// ARROW FUNCTION

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};

// --------------------------------------------------------------------
// --------------------------------------------------------------------

// CONCISE BODY ARROW FUNCTIONS

const plantNeedNeedsWater = (day) => (day === "Wednesday" ? true : false);
