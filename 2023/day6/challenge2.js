const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n');

const times = input[0].replace(/ /gi, '').match(/[0-9]+/gi).map(Number);
const recordDistances = input[1].replace(/ /gi, '').match(/[0-9]+/gi).map(Number);

let res = 1;

for (let i = 0; i < times.length; i++) {
    let nWins = 0;
    for (let j = 0, k = times[i]; j <= k; j++) {
        nWins += (j * (k - j) > recordDistances[i]) ? 1 : 0;
    }

    res *= nWins;
}

console.log(res);