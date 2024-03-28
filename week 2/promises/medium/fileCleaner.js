const fs = require('fs');

// Read the file synchronously
let text = fs.readFileSync('example.txt', 'utf8');
console.log("This is the orginal text format and text", text);

// Remove extra spaces
text = text.replace(/\s+/g, ' ').trim();

// Write back to the file synchronously
fs.writeFileSync('example.txt', text, 'utf8');

console.log('File cleaned successfully.');
