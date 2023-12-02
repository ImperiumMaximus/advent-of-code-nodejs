const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n');

const o = input.map(r => {
    const games = r.split(':')[1].split(';');

    const min_cols = {};

    games.forEach(g => {

        const regexp = /(\d+) (red|green|blue)/gi;
        while ((res = regexp.exec(g)) !== null) {
            const n = Number(res[1]);
            if (!Object.prototype.hasOwnProperty.call(min_cols, res[2])) {
                min_cols[res[2]] = n;
            } else if (n > min_cols[res[2]]) {
                min_cols[res[2]] = n;
            }
        }
       
    });
    return Object.keys(min_cols).reduce((acc, c) => acc * min_cols[c], 1);
}).reduce((acc, n) => acc + n);

console.log(o);