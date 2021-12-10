const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n').map(r => r.split(''));

const pointsTable = { '(': 1, '[': 2, '{': 3, '<': 4 };

const incompleteLines = input.map(row => {
    const stack = [];

    for (let i = 0; i < row.length; i++) {
        if (row[i] === '(' || row[i] === '[' || row[i] === '<' || row[i] === '{') {
            stack.unshift(row[i]);
        } else if (row[i] === ')') {
            if (stack[0] === '(') {
                stack.splice(0, 1);
            } else {
                return [];
            }
        } else if (row[i] === ']') {
            if (stack[0] === '[') {
                stack.splice(0, 1);
            } else {
                return [];
            }
        } else if (row[i] === '>') {
            if (stack[0] === '<') {
                stack.splice(0, 1);
            } else {
                return [];
            }
        } else if (row[i] === '}') {
            if (stack[0] === '{') {
                stack.splice(0, 1);
            } else {
                return [];
            }
        }
    }
    return stack;
});

const scores = incompleteLines.filter(i => i.length).map(i => i.reduce((acc, t) => {
    return 5 * acc + pointsTable[t];
}, 0)).sort((a, b) => a < b ? 1 : a > b ? -1 : 0);

console.log(scores[parseInt(scores.length / 2)]);