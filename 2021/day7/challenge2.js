console.log(Math.min(...Array.from(Array(1 + Math.max(...(input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split(',').map(Number))) - Math.min(...input)).keys()).map(n => n + Math.min(...input)).map(pivot => input.reduce((acc, n) => acc + (n === pivot ? 0 : Math.abs(n - pivot) * (Math.abs(n - pivot) + 1) / 2), 0))));