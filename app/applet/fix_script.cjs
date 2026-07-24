const fs = require('fs');
const content = fs.readFileSync('src/data/chapter3.ts', 'utf8');
const lines = content.split('\n');
lines.splice(570, 14);
fs.writeFileSync('src/data/chapter3.ts', lines.join('\n'));
