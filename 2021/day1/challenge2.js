console.log((input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n').map(n => Number(n))).reduce((acc, n, i) => acc + (i > 2 && ((n + input[i - 1] + input[i - 2]) > (input[i - 1] + input[i - 2] + input[i - 3]))), 0));