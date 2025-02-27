const readline = require("readline");

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define the function here
function smallest(num1, num2, num3) {
  if(num1 <= num2 && num1 <= num3) {
    return num1;
  } else if(num2 <= num1 && num2 <= num3) {
    return num2;
  } else {
    return num3;
  }
}
// Prompt the user to enter three numbers
rl.question("Enter three numbers separated by spaces: ", (input) => {
  // Split the input by spaces and parse them as numbers
  const inputs = input.split(" ");

  if (inputs.length === 3 && inputs.every((num) => !isNaN(parseFloat(num)))) {
    // Assigning each number to a separate variable
    const num1 = parseFloat(inputs[0]);
    const num2 = parseFloat(inputs[1]);
    const num3 = parseFloat(inputs[2]);

    // Call the function here, and console.log the returned value
    ;
    console.log(smallest(num1, num2, num3));
  }
  // Close the readline interface

  rl.close();
});
