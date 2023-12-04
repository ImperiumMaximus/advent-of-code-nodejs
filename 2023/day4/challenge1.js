const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n');

let p = input.map(g => {
    const numbers = g.split(':')[1].split('|');
    const winningNumbers = numbers[0].trim().match(/[0-9]+/gi).map(Number);
    const scratchedNumbers = numbers[1].trim().match(/[0-9]+/gi).map(Number);

    return scratchedNumbers.reduce((acc, sn) => winningNumbers.includes(sn) ? !acc ? 1 : acc * 2 : acc, 0);
});

console.log(p.reduce((acc, v) => acc + v));