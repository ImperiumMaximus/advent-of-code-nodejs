const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n')
const { position, depth } = input.reduce((acc, command) => { 
	const tokens = command.split(' ');
	if (tokens[0] === 'forward') {
		acc.position += Number(tokens[1]);
	} else {
		acc.depth += (tokens[0] === 'down' ? 1 : -1) * Number(tokens[1]);
	}
	return acc;
}, { position: 0, depth: 0 });

console.log(position * depth);