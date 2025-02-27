let circles = [10, 30, 50];

// Write the required code to return a new array having areas of all circles mentioned in the circles array.
let areas = circles.map((radius) => Math.PI * radius * radius);
console.log(areas);