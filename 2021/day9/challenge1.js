const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n').map(r => r.split('').map(Number));

const adjacentPositions = [[-1, 0], [0, -1], [0, 1], [1, 0]];

const lowPoints = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        const curNumber = input[i][j];

        const adjancentNumbers = adjacentPositions.filter(p => (i + p[0]) >= 0 && (j + p[1]) >= 0 && (i + p[0]) < input.length && (j + p[1]) < input[i].length).map(p => input[i + p[0]][j + p[1]]);
        if (curNumber < Math.min(...adjancentNumbers)) {
            lowPoints.push(curNumber);
        }
    }
}

console.log(lowPoints.reduce((acc, n) => acc + n + 1, 0));