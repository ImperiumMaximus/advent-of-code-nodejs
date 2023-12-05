const input = require('fs').readFileSync(require('path').join(__dirname, 'input.txt')).toString().split('\n\n');

const seeds = input[0].match(/[0-9]+/gi).map(Number);

const seedsToSoil = input[1].split('\n').slice(1).map(r => r.match(/[0-9]+/gi).map(Number))

const soilToFert = input[2].split('\n').slice(1).map(r => r.match(/[0-9]+/gi).map(Number))

const fertToWater = input[3].split('\n').slice(1).map(r => r.match(/[0-9]+/gi).map(Number))

const waterToLight = input[4].split('\n').slice(1).map(r => r.match(/[0-9]+/gi).map(Number))

const lightToTemp = input[5].split('\n').slice(1).map(r => r.match(/[0-9]+/gi).map(Number))

const tempToHum = input[6].split('\n').slice(1).map(r => r.match(/[0-9]+/gi).map(Number))

const humToLoc = input[7].split('\n').slice(1).map(r => r.match(/[0-9]+/gi).map(Number))

let minLocation = +Infinity;

for (let i = 0; i < seeds.length; i += 2) {
    for (let n = seeds[i], m = seeds[i+1] + n; n < m; n++) {
        let cursor = n;
        let j;
        for (j = 0; j < seedsToSoil.length; j++) {
            if (seedsToSoil[j][1] <= cursor && (seedsToSoil[j][1] + seedsToSoil[j][2]) > cursor) {
                cursor = seedsToSoil[j][0] + (cursor - seedsToSoil[j][1]); 
                break;
            }
        }
    
    
        for (j = 0; j < soilToFert.length; j++) {
            if (soilToFert[j][1] <= cursor && (soilToFert[j][1] + soilToFert[j][2]) > cursor) {
                cursor = soilToFert[j][0] + (cursor - soilToFert[j][1]); 
                break;
            }
        }
    
        for (j = 0; j < fertToWater.length; j++) {
            if (fertToWater[j][1] <= cursor && (fertToWater[j][1] + fertToWater[j][2]) > cursor) {
                cursor = fertToWater[j][0] + (cursor - fertToWater[j][1]); 
                break;
            }
        }
    
        for (j = 0; j < waterToLight.length; j++) {
            if (waterToLight[j][1] <= cursor && (waterToLight[j][1] + waterToLight[j][2]) > cursor) {
                cursor = waterToLight[j][0] + (cursor - waterToLight[j][1]); 
                break;
    
            }
        }
        
        for (j = 0; j < lightToTemp.length; j++) {
            if (lightToTemp[j][1] <= cursor && (lightToTemp[j][1] + lightToTemp[j][2]) > cursor) {
                cursor = lightToTemp[j][0] + (cursor - lightToTemp[j][1]); 
                break;
    
            }
        }
    
        for (j = 0; j < tempToHum.length; j++) {
            if (tempToHum[j][1] <= cursor && (tempToHum[j][1] + tempToHum[j][2]) > cursor) {
                cursor = tempToHum[j][0] + (cursor - tempToHum[j][1]); 
                break;
    
            }
        }
    
        for (j = 0; j < humToLoc.length; j++) {
            if (humToLoc[j][1] <= cursor && (humToLoc[j][1] + humToLoc[j][2]) > cursor) {
                cursor = humToLoc[j][0] + (cursor - humToLoc[j][1]); 
                break;
    
            }
        }
    
        if (cursor < minLocation) {
            minLocation = cursor;
        }
    }
}

console.log(minLocation);