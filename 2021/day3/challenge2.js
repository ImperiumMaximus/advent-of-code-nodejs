const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n').map(b => b.split(''));

let input1 = JSON.parse(JSON.stringify(input));
let input2 = JSON.parse(JSON.stringify(input));
let i = 0;
let j = 0;
while (input1.length > 1 || input2.length > 1) {
	if (input1.length > 1) {
		const bits1 = input1.reduce((acc, n) => [acc[0] + Number(n[i]), acc[1] + Number(!Number(n[i]))], [0, 0]);
		input1 = input1.filter(n => n[i] === Number(!bits1.indexOf(Math.max(...bits1))).toString());
		console.log(bits1);
		i++;
	}

	if (input2.length > 1) {
		const bits2 = input2.reduce((acc, n) => [acc[0] + Number(n[j]), acc[1] + Number(!Number(n[j]))], [0, 0]);
		input2 = input2.filter(n => n[j] === Number(bits2.indexOf(Math.max(...bits2))).toString());
		console.log(bits2);
		j++;
	}
	console.log(input1, input2);

}

console.log(parseInt(input1[0].join(''), 2) * parseInt(input2[0].join(''), 2));