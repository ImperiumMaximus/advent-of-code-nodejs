const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n').map(r => r.split('').map(Number));

const adjacentPositions = [[-1, 0], [0, -1], [0, 1], [1, 0]];

const startingCoords = [];

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        const curNumber = input[i][j];

        const adjancentNumbers = adjacentPositions.filter(p => (i + p[0]) >= 0 && (j + p[1]) >= 0 && (i + p[0]) < input.length && (j + p[1]) < input[i + p[0]].length).map(p => input[i + p[0]][j + p[1]]);
        if (curNumber < Math.min(...adjancentNumbers)) {
            startingCoords.push([i, j]);
        }
    }
}

const sizes = startingCoords.map(coords => {
    let basinSize = 1;
    const closedList = [];
    const frontier = [coords];

    while (frontier.length) {
        const curCoords = frontier.pop();
        if (closedList.some(closedListCoords => closedListCoords[0] === curCoords[0] && closedListCoords[1] === curCoords[1])) {
            continue;
        }
        closedList.push(curCoords);
        adjacentPositions.forEach(p => {
            if ((curCoords[0] + p[0]) >= 0 && (curCoords[1] + p[1]) >= 0 && (curCoords[0] + p[0]) < input.length && (curCoords[1] + p[1]) < input[curCoords[0] + p[0]].length && !closedList.some(closedListCoords => closedListCoords[0] === (curCoords[0] + p[0]) && closedListCoords[1] === (curCoords[1] + p[1])) && !frontier.some(closedListCoords => closedListCoords[0] === (curCoords[0] + p[0]) && closedListCoords[1] === (curCoords[1] + p[1])) && input[curCoords[0] + p[0]][curCoords[1] + p[1]] < 9) {
                frontier.unshift([curCoords[0] + p[0], curCoords[1] + p[1]]);
                basinSize++;
            }
        });
    }
    return basinSize;
});

console.log(sizes.sort((a, b) => a < b ? 1 : a > b ? -1 : 0).slice(0, 3).reduce((acc, n) => acc * n, 1));