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
