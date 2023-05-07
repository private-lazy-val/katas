/* We’ll pass you an array of two numbers. Return the sum of those two numbers, and all numbers between them. The lowest number will not always come first.  */

function getSum(arr) {
  const [a, b] = arr.sort();
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum([5, 1])); // 15
