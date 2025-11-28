// path-example.js
const path = require('path');

const filePath = '/home/shree/MernLab/package.json';
console.log(path.basename(filePath));  // test.txt
console.log(path.dirname(filePath));   // /users/admin
console.log(path.extname(filePath));   // .txt


// os-example.js
const os = require('os');

console.log('Platform:', os.platform());
console.log('CPU Cores:', os.cpus().length);
console.log('Free Memory:', os.freemem());


// url-example.js
const url = require('url');

const myUrl = new URL('https://example.com/page?name=Shree&age=34');

console.log(myUrl.hostname);             // example.com
console.log(myUrl.pathname);             // /page
console.log(myUrl.searchParams.get('name')); // pramod