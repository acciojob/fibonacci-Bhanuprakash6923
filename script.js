<script>
  function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 0;
    if (num === 2) return 1;

    let a = 0, b = 1;
    for (let i = 3; i <= num; i++) {
      let next = a + b;
      a = b;
      b = next;
    }

    return b;
  }

  // ✅ Sample test cases
  console.log(fibonacci(1));  // ➝ 0
  console.log(fibonacci(2));  // ➝ 1
  console.log(fibonacci(5));  // ➝ 3
  console.log(fibonacci(10)); // ➝ 34
  console.log(fibonacci(0));  // ➝ 0
  console.log(fibonacci(50)); // ➝ 7778742049
</script>
