let input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split(',').map(Number);
let prevX, x = Math.min(...input);
let prevY = input.reduce((acc, n) => acc + ((n === x) ? 0 : -(((n - x) * Math.abs(n + 1 - x)) / (2 * Math.abs(n - x)))) + (((n + 1) === x) ? 0 : -((((n + 1 - x) * Math.abs(n - x)) / (2 * Math.abs(n + 1 - x))))), 0);
let horPos;
for (x = Math.min(...input) + 1; x <= Math.max(...input); x++) {
    let y = input.reduce((acc, n) => acc + ((n === x) ? 0 : -(((n - x) * Math.abs(n + 1 - x)) / (2 * Math.abs(n - x)))) + (((n + 1) === x) ? 0 : -((((n + 1 - x) * Math.abs(n - x)) / (2 * Math.abs(n + 1 - x))))), 0);
    if (y === 0) {
        horPos = parseInt(x);
        break;
    } else if (Math.sign(y) != Math.sign(prevY)) {
        horPos = parseInt(Math.abs(y) < Math.abs(prevY) ? x : prevX) - 1;
        break;
    } else {
        prevX = x;
        prevY = y;
    }
}
console.log(input.reduce((acc, n) => acc + (n === horPos ? 0 : Math.abs(n - horPos) * (Math.abs(n - horPos) + 1) / 2), 0));