const fs = require("fs");
const https = require("https");

(async () => {
    const owners = await new Promise((res, _rej) => {
        https.get("https://cdn.jsdelivr.net/gh/nkalupahana/branchProtection@main/codeowners.json", res => {
            res.on("data", data => {
                res(JSON.stringify(data));
            })
        });
    });
    
    console.log(owners);
});



/*

const PASS = "PASS";
const FAIL = "FAIL";


const user = process.argv[2];
const branch = process.argv[3].split("refs/heads/")[1];

if (!owners[branch] || owners[branch].includes(user)) {
    console.log(PASS);
    return;
}

const { exec } = require('child_process');
exec("chmod a+x revert-commit.bash; ./revert-commit.bash", (err, stdout, stderr) => {
    console.log(err);
    console.log(stdout);
    console.log(stderr);
});

*/
