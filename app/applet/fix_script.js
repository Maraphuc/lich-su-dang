const fs = require('fs');
const content = fs.readFileSync('/app/applet/src/data/chapter3.ts', 'utf8');
const lines = content.split('\n');
// Line 571 is index 570. Delete 14 lines (571 to 584 inclusive)
lines.splice(570, 14);
fs.writeFileSync('/app/applet/src/data/chapter3.ts', lines.join('\n'));
