const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n');

const numbers = input.splice(0, 1)[0].split(',').map(Number);

const boards = [];
let i = 0;
while (i < input.length) {
    if (input[i].trim() === '' && i < input.length - 1) {
        i++;
        const board = [];
        while (i < input.length && input[i].trim() !== '') {
            board.push(input[i].trim().split(/\W+/g).map(Number));
            i++;
        }
        boards.push(board);
    }
}

const foundMap = JSON.parse(JSON.stringify(boards).replace(/\d+/g, '0'));
const foundMapTransposed = JSON.parse(JSON.stringify(boards).replace(/\d+/g, '0'));

i = 0;
let boardIndex = -1;
let lastNumber = -1;
while (boardIndex < 0 && i < numbers.length) {
    boards.forEach((board, j) => {
        board.forEach((row, k) => {
            if ((idx = row.findIndex(n => n === numbers[i])) >= 0) {
                foundMap[j][k][idx] = 1;
                foundMapTransposed[j][idx][k] = 1;
            }
        });
    });

    for (let j = 0; boardIndex < 0 && j < foundMap.length; j++) {
        const fMap = foundMap[j];
        const fMapTransposed = foundMapTransposed[j];
        for (let k = 0; boardIndex < 0 && k < fMap.length; k++) {
            if (fMap[k].reduce((acc, b) => acc + b) === fMap[k].length || fMapTransposed[k].reduce((acc, b) => acc + b) === fMapTransposed[k].length) {
                boardIndex = j;
                lastNumber = numbers[i];
            }
        }
    }
    i++;
}

console.log(lastNumber * boards[boardIndex].flat().filter(((_, i) => !foundMap[boardIndex].flat()[i])).reduce((acc, n) => acc + n));