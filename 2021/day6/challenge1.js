let input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split(',').map(Number);

for (let d = 1; d <= 80; d++) {
    let laternfishes = [];

    input = input.map(l => { if((--l) === -1) { laternfishes.push(8); return 6 } else { return l } });

    input.push(...laternfishes);
}

console.log(input.length);