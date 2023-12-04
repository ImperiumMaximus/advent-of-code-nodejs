const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n');

const numCards = input.map(_ => 1);

input.map((g, i) => {
    const numbers = g.split(':')[1].split('|');
    const winningNumbers = numbers[0].trim().match(/[0-9]+/gi).map(Number);
    const scratchedNumbers = numbers[1].trim().match(/[0-9]+/gi).map(Number);

    const numMatches = scratchedNumbers.reduce((acc, n) => winningNumbers.includes(n) ? ++acc : acc, 0);

    for (let j = i + 1; j < i + numMatches + 1; j++) {
        numCards[j] += numCards[i];
    }
});

console.log(numCards.reduce((acc, n) => acc + n));