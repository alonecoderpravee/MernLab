

//Using the fs Module: (CommonJS Syntax)
// fs-example.js
const fs = require('fs');

// Write a file
fs.writeFileSync('demo.txt', 'Hello from Node.js');

// Read the file
const data = fs.readFileSync('demo.txt', 'utf-8');
console.log(data); // Output: Hello from Node.js

