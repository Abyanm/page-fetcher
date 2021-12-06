const request = require('request');
const fs = require('fs')
const args = process.argv.slice(2);

let urlArg = args[0];
let pathArg = args[1];

request(urlArg, (error, response, body) =>
fs.writeFile(pathArg, body, err => {
    if (err) {
        console.error(err)
        return
    }
    const {size} = fs.statSync(pathArg);
    console.log('Downloaded and saved #{size} bytes to ./index.hmtl')
  })
);
