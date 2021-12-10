const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n').map(r => r.split(''));

const pointsTable = { ')': 3, ']': 57, '}': 1197, '>': 25137 };

const points = input.map(row => {
    const stack = [];

    for (let i = 0; i < row.length; i++) {
        if (row[i] === '(' || row[i] === '[' || row[i] === '<' || row[i] === '{') {
            stack.unshift(row[i]);
        } else if (row[i] === ')') {
            if (stack[0] === '(') {
                stack.splice(0, 1);
            } else {
                return pointsTable[row[i]];
            }
        } else if (row[i] === ']') {
            if (stack[0] === '[') {
                stack.splice(0, 1);
            } else {
                return pointsTable[row[i]];
            }
        } else if (row[i] === '>') {
            if (stack[0] === '<') {
                stack.splice(0, 1);
            } else {
                return pointsTable[row[i]];
            }
        } else if (row[i] === '}') {
            if (stack[0] === '{') {
                stack.splice(0, 1);
            } else {
                return pointsTable[row[i]];
            }
        }
    }
    return 0;
});

console.log(points.reduce((acc, p) => acc + p));