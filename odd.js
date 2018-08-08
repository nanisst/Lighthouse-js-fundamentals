function isOdd(num) {
  x = num % 2 === 0
  y = !x
  return y;
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));