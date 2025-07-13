function add(a, b) {
  return a + b;
}

const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Convert arguments to integers
const num1 = parseInt(arg1, 10);
const num2 = parseInt(arg2, 10);

// Check if both arguments are valid integers
if (isNaN(num1) || isNaN(num2)) {
  console.log("Please provide two valid integers.");
} else {
  console.log(add(num1, num2));
}