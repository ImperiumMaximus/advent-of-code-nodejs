let input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split(',').map(Number);
let horPos;
for (let x = Math.min(...input); x <= Math.max(...input); x++) {
    if (input.reduce((acc, n) => (acc + ((n === x) ? 0 : ((n - x) / Math.abs(n - x)))), 0) >= 0) {
        horPos = x;
    }
}

console.log(input.reduce((acc, n) => acc + Math.abs(n - horPos), 0));