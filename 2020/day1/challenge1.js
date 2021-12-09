const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n').map(Number);

let num1, num2;

num1 = input.filter(n => { 
    if (!num2) {
        const sums = input.map(m => n + m); 
        const index = sums.indexOf(2020); 
        if (index !== -1) { 
            num2 = input[index]; 
        } 
        return index !== -1;
    }
    return false;
})[0];

console.log(num1 * num2);