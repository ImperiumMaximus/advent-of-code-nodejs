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

let foundMap = JSON.parse(JSON.stringify(boards).replace(/\d+/g, '0'));
let foundMapTransposed = JSON.parse(JSON.stringify(boards).replace(/\d+/g, '0'));

i = 0;
let lastNumber = 0;
let lastBoard = [];
let lastFoundMap = [];
while (boards.length && i < numbers.length) {
    boards.forEach((board, j) => {
        board.forEach((row, k) => {
            if ((idx = row.findIndex(n => n === numbers[i])) >= 0) {
                foundMap[j][k][idx] = 1;
                foundMapTransposed[j][idx][k] = 1;
            }
        });
    });
    
    for (let j = 0; j < foundMap.length; j++) {
        const fMap = foundMap[j];
        const fMapTransposed = foundMapTransposed[j];
        let bI = j;
        for (let k = 0; boards.length && k < fMap.length; k++) {
            if(fMap[k].reduce((acc, b) => acc + b) === fMap[k].length || fMapTransposed[k].reduce((acc, b) => acc + b) === fMapTransposed[k].length) {
                lastNumber = numbers[i];
                lastBoard = boards.splice(bI, 1);
                lastFoundMap = foundMap.splice(bI, 1);
                foundMapTransposed.splice(bI, 1);
                j -= j > 0 ? 1 : 0;
            }
        }
    }
    i++;
}

console.log(lastNumber * lastBoard[0].flat().filter(((_, i) => !lastFoundMap[0].flat()[i])).reduce((acc, n) => acc + n, 0));