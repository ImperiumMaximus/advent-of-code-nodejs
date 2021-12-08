let input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n');

const segmentsToDigits =  { '012345': '0', '12': '1', '01346': '2', '01236': '3', '1256': '4', '02356': '5', '023456': '6', '012': '7', '0123456': '8', '012356': '9' };

console.log(input.reduce((acc, row, i) => {
    const letterToSegment = {}
    let [ signals, digits ] = row.split('|').map(t => t.trim().split(' ').map(s => s.split('')));

    // Find top segment
    const one = signals.filter(s => s.length === 2)[0];
    const seven = signals.filter(s => s.length === 3)[0];
    letterToSegment[seven.filter(s => !one.includes(s))[0]] = '0';

    // Find bottom and top left segments
    const four = signals.filter(s => s.length === 4)[0];
    const three = signals.filter(s => s.length === 5 && s.includes(one[0]) && s.includes(one[1]))[0];
    letterToSegment[three.filter(s => !Object.keys(letterToSegment).includes(s) && !four.includes(s))[0]] = '3';
    letterToSegment[four.filter(s => !Object.keys(letterToSegment).includes(s) && !three.includes(s))[0]] = '5';

    // Find middle segment
    const middleSegment = four.filter(s => !Object.keys(letterToSegment).includes(s) && !one.includes(s))[0];
    letterToSegment[middleSegment] = '6';

    // Find bottom right segment
    const five = signals.filter(s => s.length === 5 && Object.keys(letterToSegment).every(l => s.includes(l)))[0];
    letterToSegment[five.filter(s => !Object.keys(letterToSegment).includes(s))[0]] = '2';

    // Find top right
    letterToSegment[one.filter(s => !Object.keys(letterToSegment).includes(s))[0]] = '1';

    const zero = signals.filter(s => s.length === 6 && !s.some(l => l === middleSegment))[0];

    // Find bottom left
    letterToSegment[zero.filter(s => !Object.keys(letterToSegment).includes(s))[0]] = '4';

    const dSegm = parseInt(digits.map(digit => digit.map(l => letterToSegment[l]).sort().join('')).reduce((acc, d) => acc + segmentsToDigits[d], ''));
    
    return acc + dSegm;
}, 0));