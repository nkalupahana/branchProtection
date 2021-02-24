const fs = require("fs");
const owners = JSON.parse(fs.readFileSync("../../codeowners.json"));

console.log(owners);
console.log(process.argv[2]);
console.log(process.argv[3]);
