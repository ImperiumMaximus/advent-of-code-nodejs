const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n').map(r => r.split(''));

const adjCells = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
let result = 0;

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
        const cellValue = input[i][j];

        if (cellValue === '*') {
            let ratios = [ ];
            let ratioIdx = 0;
            let startT = -1;
            // iterate over adjacent cells of '*'
            for (let k = 0; k < adjCells.length; k++) {
                if ((j + adjCells[k][0] < 0) || (i + adjCells[k][1] < 0) || (j + adjCells[k][0] >= input.length) || (i + adjCells[k][1] >= input[i].length)) {
                    continue;
                }

                // if i change line => reset start index where to look for a number
                // startT is needed to avoid finding multiple times the same number
                if (k === 3 || k === 5) {
                    startT = -1;
                }

                // does the adjacent cell contain a digit?
                const adjI = i + adjCells[k][1];
                const adjJ = j + adjCells[k][0];
                if (input[adjI][adjJ].match(/[0-9]/)) {

                    // find the start of the number for that digit
                    let t = adjJ;
                    while (t >= 0 && input[adjI][t].match(/[0-9]/)) {
                        t--;
                    }

                    t++;

                    // if the start index matches a previously found number on the same line => skip
                    if (startT === t) {
                        continue;
                    }

                    startT = t;

                    // read from left to right to obtain the full number
                    let currentNumber = '';
                    while (t < input[adjI].length && input[adjI][t].match(/[0-9]/) ) {
                        currentNumber = `${currentNumber}${input[adjI][t]}`;
                        t++;
                    }

                    // add it to the ratios for that potential gear
                    ratios[ratioIdx++] = Number(currentNumber);
                    
                }
            }

            // if we have found exactly 2 part numbers multiply them 
            // and add them to final result
            if (ratioIdx == 2) {
                result += (ratios[0] * ratios[1]);
            }
        }
    }
}

console.log(result);