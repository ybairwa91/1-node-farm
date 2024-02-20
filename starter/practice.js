const fs = require("fs");

//read file synchronously
const output = fs.readFileSync(".\txt\farzi.txt", "utf-8");
console.log(output);
