// We can generalize the algorithm for both challenges by noticing that challenge 1 is basically like challenge 2 but with a sliding window of size = 1
// This actually allows for an arbitrary-sized sliding window within the interval (0, input.length)
// Usage: node day1/bonus_challenge1_2.js <sliding_window_size>
// To solve for challenge 1: node day1/bonus_challenge1_2.js 1
// To solve for challenge 2: node day1/bonus_challenge1_2.js 3
console.log(((size = Number((require('process')).argv[2])) < 1 || size >= (input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n').map(n => Number(n))).length) ? 0 : input.reduce((acc, _, i) => acc + (i > size - 1 && input.slice(i - size, i).reduce((acc, n) => acc + n, 0) > input.slice(i - size - 1, i - 1).reduce((acc, n) => acc + n, 0)), 0));