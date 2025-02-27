const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define the function here.


rl.question("Enter two numbers separated by space: ", (input) => {
  const numbers = input.split(" ").map(Number);
  const [num1, num2] = numbers;

  // Call the function here and console log the value returned by it.
  // Pass num1 and num2 as arguments to the function
 
  rl.close();
});
