let input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split(',').map(Number);
fuels = [];
for (let x = 0; x <= Math.max(...input); x++) {
    fuels.push(input.map(n => x === n ? 0 : (Array.from(Array(Math.abs(n - x) + 1).keys()).reduce((acc, n) => acc + n))).reduce((acc, n) => acc + n));
}
console.log(Math.min(...fuels));
