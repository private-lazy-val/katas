/* Write a function to flip a coin n times that returns the numbers of times a “heads” was flipped. */
function flipCoin(n) {
  let headsNum = 0;
  for (let i = 0; i < n; i++) {
    if (Math.random() < 0.5) {
      headsNum += 1;
    }
  }
  return headsNum;
}

console.log(flipCoin(1000));
