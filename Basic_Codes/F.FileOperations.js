const fs = require('fs');

console.log('Asynchronous Operations : ');
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
});

fs.writeFile('output.txt', 'Hello from Node.js!', (err) => {
    if (err) throw err;
    console.log('File written successfully!');
});

fs.appendFile('output.txt', '\nThis is a new line.', (err) => {
    if (err) throw err;
    console.log('Content appended!');
});

fs.unlink('output.txt', (err) => {
    if (err) throw err;
    console.log('File deleted successfully!');
});

fs.mkdir('myFolder', (err) => {
    if (err) throw err;
    console.log('Folder created!');
});

fs.rmdir('myFolder', (err) => {
    if (err) throw err;
    console.log('Folder deleted!');
});





console.log('Synchronous Operations : ');

const data = fs.readFileSync('example.txt', 'utf8');
console.log("File content:", data);

fs.writeFileSync('output.txt', 'Hello again!');