console.log(require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n').map(r => r.split('|')[1].trim()).reduce((acc, l) => acc + l.split(' ').filter(w => w.length === 2 || w.length === 3 || w.length === 4 || w.length === 7).length, 0));