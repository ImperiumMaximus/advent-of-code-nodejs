const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n');

const { xStartCoords, yStartCoords, xEndCoords, yEndCoords } = input.reduce((acc, segm) => {
    const regex = /(\d+),(\d+) -> (\d+),(\d+)/i;
    const matches = segm.match(regex);

    acc.xStartCoords.push(Number(matches[1]));
    acc.yStartCoords.push(Number(matches[2]));
    acc.xEndCoords.push(Number(matches[3]));
    acc.yEndCoords.push(Number(matches[4]));

    return acc;
}, { xStartCoords: [], yStartCoords: [], xEndCoords: [], yEndCoords: [] });

const maxX = Math.max(...xStartCoords, ...xEndCoords);
const maxY = Math.max(...yStartCoords, ...yEndCoords);

const cartesianPlot = Array(maxY + 1).fill(0).map(_ => (Array(maxX + 1).fill(0)));

for (let i = 0; i < xStartCoords.length; i++) {
    if (xStartCoords[i] === xEndCoords[i]) {
        for (let j = yStartCoords[i]; yStartCoords[i] >= yEndCoords[i] ? j >= yEndCoords[i] : j <= yEndCoords[i]; yStartCoords[i] >= yEndCoords[i] ? j-- : j++) {
            cartesianPlot[j][xStartCoords[i]]++;
        }
    } else if (yStartCoords[i] === yEndCoords[i]) {
        for (let j = xStartCoords[i]; xStartCoords[i] >= xEndCoords[i] ? j >= xEndCoords[i] : j <= xEndCoords[i]; xStartCoords[i] >= xEndCoords[i] ? j-- : j++) {
            cartesianPlot[yStartCoords[i]][j]++;
        }
    }
}

console.log(cartesianPlot.flat().filter(c => c > 1).length);