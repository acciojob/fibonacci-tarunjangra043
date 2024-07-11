function fibonacci(num) {
  if (num <= 0) {
    throw new Error("Input should be a positive integer");
  }
  if (num === 1) {
    return 0;
  }
  if (num === 2) {
    return 1;
  }
  let a = 0;
  let b = 1;
  for (let i = 3; i <= num; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

module.exports = fibonacci;