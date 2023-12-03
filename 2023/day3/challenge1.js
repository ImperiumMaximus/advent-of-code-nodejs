const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n').map(r => r.split(''));
// [ x, y ]
const adj_cells = [ [ -1, -1 ], [ 0, -1 ], [ 1, -1 ], [ -1, 0 ], [ 1, 0 ], [ -1, 1 ], [ 0, 1 ], [ 1, 1 ] ];
const partNumbers = [];

for ( let i = 0; i < input.length; i++ ) {
    let currentNumber = '';
    let foundSymbol = false;
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j].match(/[0-9]/)) {
            currentNumber = `${currentNumber}${input[i][j]}`;
            for (let k = 0; !foundSymbol && k < adj_cells.length; k++) {
                if ((j + adj_cells[k][0] < 0) || (i + adj_cells[k][1] < 0) || (j + adj_cells[k][0] >= input.length) || (i + adj_cells[k][1] >= input[i].length)) {
                    continue;
                }

                const cellValue = input[i + adj_cells[k][1]][j + adj_cells[k][0]];
                if (!cellValue.match(/[0-9]/) && cellValue !== '.') {
                    foundSymbol = true;
                }
            }
        } else if (foundSymbol) {
            partNumbers.push(Number(currentNumber));
            currentNumber = '';
            foundSymbol = false;
        } else {
            currentNumber = '';
            foundSymbol = false;
        }
    }
    if (foundSymbol) {
        partNumbers.push(Number(currentNumber));
    }
}

console.log(partNumbers.reduce((acc, n) => acc + n, 0));