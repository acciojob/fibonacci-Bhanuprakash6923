function fibonacci(num) {
  if (num <= 0) {
    return "Input must be a positive integer.";
  }
  if (num === 1) return 0;  // 1st Fibonacci number is 0
  if (num === 2) return 1;  // 2nd Fibonacci number is 1

  let a = 0, b = 1;
  for (let i = 3; i <= num; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// Test cases
console.log(fibonacci(1));  // Expected Output: 0
console.log(fibonacci(2));  // Expected Output: 1
console.log(fibonacci(5));  // Expected Output: 3
console.log(fibonacci(10)); // Expected Output: 34
