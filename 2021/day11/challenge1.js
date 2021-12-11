let input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n').map(r => r.split('').map(Number));

const adjacentPositions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

const maxSteps = 100;
let curStep = 0;
let flashes = 0;

while (curStep < maxSteps) {
    input = input.map(row => row.map(cell => cell + 1));
    const frontier = [];
    const closedList = [];

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === 10) {
                input[i][j] = 0;
                frontier.push([i, j]);
                flashes++;
            }
        }
    }

    while (frontier.length) {
        const curCoords = frontier.pop();
        if (closedList.some(closedListCoords => closedListCoords[0] === curCoords[0] && closedListCoords[1] === curCoords[1])) {
            continue;
        }
        closedList.push(curCoords); 
        adjacentPositions.forEach(p => {
            if ((curCoords[0] + p[0]) >= 0 && (curCoords[1] + p[1]) >= 0 && (curCoords[0] + p[0]) < input.length && (curCoords[1] + p[1]) < input[curCoords[0] + p[0]].length && !closedList.some(closedListCoords => closedListCoords[0] === (curCoords[0] + p[0]) && closedListCoords[1] === (curCoords[1] + p[1])) && !frontier.some(closedListCoords => closedListCoords[0] === (curCoords[0] + p[0]) && closedListCoords[1] === (curCoords[1] + p[1]))) {
                input[curCoords[0] + p[0]][curCoords[1] + p[1]]++;
                if (input[curCoords[0] + p[0]][curCoords[1] + p[1]] === 10) {
                    input[curCoords[0] + p[0]][curCoords[1] + p[1]] = 0;
                    frontier.unshift([curCoords[0] + p[0], curCoords[1] + p[1]]);
                    flashes++;
                }
            }
        });
    }

    curStep++;
}

console.log(flashes);