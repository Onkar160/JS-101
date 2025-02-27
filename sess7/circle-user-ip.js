// Import the readline module
const readline = require("readline");

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define get getCircum function

// Prompt the user for a number
rl.question("Please enter the radius value: ", (input) => {
  // Convert the input to a number
  const radius = parseFloat(input);

  console.log(getCircum(radius));

  // Close the readline interface
  rl.close();
});
