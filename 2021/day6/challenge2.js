let input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split(',').map(Number);

const daysToSimulate = 256;

newFishesByDay = { };
newFishesByDay[daysToSimulate.toString()] = input.length;

input.forEach(n => {
    let d = 0;
    while (d <= daysToSimulate) {
        d += (n + 1);
        if (!Object.prototype.hasOwnProperty.call(newFishesByDay, d.toString()) && d <= daysToSimulate) {
            newFishesByDay[d.toString()] = 0;
        } 
        
        if (d <= daysToSimulate) {
            newFishesByDay[d.toString()]++;
            if (d != daysToSimulate) { 
                newFishesByDay[daysToSimulate.toString()]++; 
            }
        }
        n = 6;
    }
});

while (daysToSimulate > (Number(Object.keys(newFishesByDay)[0]) + 7)) {
    let d = Number(Object.keys(newFishesByDay)[0]);
    let n = 8;
    while (d <= daysToSimulate) { 
        d += (n + 1);
        if (!Object.prototype.hasOwnProperty.call(newFishesByDay, d.toString()) && d <= daysToSimulate) {
            newFishesByDay[d.toString()] = 0;
        } 
        
        if (d <= daysToSimulate) {
            newFishesByDay[d.toString()] += newFishesByDay[Object.keys(newFishesByDay)[0]];
            if (d != daysToSimulate) { 
                newFishesByDay[daysToSimulate.toString()] += newFishesByDay[Object.keys(newFishesByDay)[0]]; 
            }

        }
        n = 6;
    }
    delete newFishesByDay[Object.keys(newFishesByDay)[0]];
}

console.log(newFishesByDay[daysToSimulate.toString()]);