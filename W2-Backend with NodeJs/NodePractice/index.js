const fs = require("fs");
const calculator = require("./calculator.js");
console.log(calculator.calculator(2, 2));

fs.writeFileSync("note.txt", "hlo");
fs.appendFileSync("note.txt", "this is next line append");
fs.appendFileSync("note.txt", "My name (from argument): ");
fs.appendFileSync("note.txt", process.argv[2]); // node index.js Zamin
