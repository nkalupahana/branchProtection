const fs = require("fs");
const owners = JSON.parse(fs.readFileSync("../../codeowners.json"));

const PASS = 1;
const FAIL = -1;


const user = process.argv[2];
const branch = process.argv[3].split("refs/heads/")[1];

if (!owners[branch] || owners[branch].includes(user)) {
    console.log(PASS);
    return;
}

console.log(FAIL);
