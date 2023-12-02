const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n');
const avail_cubes = { 'red': 12, 'green': 13, 'blue': 14 };

const o = input.map(r => {
    const id = r.split(':')[0].match(/Game (\d+)/i)[1];
    const games = r.split(':')[1].split(';');

    return games.every(g => {
        const regexp = /(\d+) (red|green|blue)/gi;
        while ((res = regexp.exec(g)) !== null) {
            if (res[1] > avail_cubes[res[2]]) {
                return false;
            }
        }
        return true;
    }) ? Number(id) : 0;
}).reduce((acc, n) => acc + n);

console.log(o);