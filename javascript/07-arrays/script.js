// ARRAYS

const hobbies = ["coding", "laughing", "dancing"];

console.log(hobbies);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// ACCESSING ELEMENTS

const famousSayings = [
  "Fortune favors the brave.",
  "A joke is a very serious thing.",
  "Where there is love there is life.",
];

const listItem = famousSayings[0];

console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// UPDATE ELEMENTS

let groceryList = ["bread", "tomatoes", "milk"];

groceryList[1] = "avocados";

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// LENGTH PROPERTY

const objectives = ["Learn a new language", "Read 52 books", "Run a marathon"];

console.log(objectives.length);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// PUSH METHOD

const chores = ["wash dishes", "do laundry", "take out trash"];

chores.push("sing", "brush teeth");

console.log(chores);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// POP METHOD

const choress = [
  "wash dishes",
  "do laundry",
  "take out trash",
  "cook dinner",
  "mop floor",
];

chores.pop();
console.log(choress);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// OTHER METHODS

const groceryList = [
  "orange juice",
  "bananas",
  "coffee beans",
  "brown rice",
  "pasta",
  "coconut oil",
  "plantains",
];

groceryList.shift();

console.log(groceryList);

groceryList.unshift("popcorn");

console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf("pasta");

console.log(pastaIndex);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// ARRAYS AND FUNCTIONS

const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);

console.log(concept);

const removeElement = (newArr) => {
  newArr.pop();
};

removeElement(concept);

console.log(concept);

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// NESTED ARRAYS

const numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const target = numberClusters[2][1];
