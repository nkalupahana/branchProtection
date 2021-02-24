const fs = require("fs");
const owners = JSON.parse(fs.readFileSync("../../codeowners.json"));

const PASS = "PASS";
const FAIL = "FAIL";


const user = process.argv[2];
const branch = process.argv[3].split("refs/heads/")[1];

if (!owners[branch] || owners[branch].includes(user)) {
    console.log(PASS);
    return;
}

const { exec } = require('child_process');
exec("chmod a+x revert-commit.bash; ./revert-commit.bash")
