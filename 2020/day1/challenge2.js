const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n').map(Number);

let num1, num2, num3;
let found = false;

for (let i = 0; !found && i < input.length; i++) {
    for (let j = 0; !found && j < input.length; j++) {
        for (let k = 0; !found && k < input.length; k++) {
            if (input[i] + input[j] + input[k] === 2020) {
                found = true;
                num1 = input[i]; 
                num2 = input[j];
                num3 = input[k];
            }
        }
    }
}

console.log(num1 * num2 * num3);