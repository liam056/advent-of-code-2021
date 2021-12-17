const fs = require("fs");

const diagnostics = fs
  .readFileSync(`${__dirname}/diagnostics.txt`, "utf8")
  .split("\n");

let gamma = "";
let epsilon = "";

for (let i = 0; i <= diagnostics[0].length - 1; i++) {
  const totalOnes = diagnostics
    .map((diagnostic) => parseInt(diagnostic[i]))
    .reduce((total, value) => total + value);

  const value = totalOnes >= diagnostics.length / 2;

  gamma += value ? 1 : 0;
  epsilon += value ? 0 : 1;
}

gamma = parseInt(gamma, 2);
epsilon = parseInt(epsilon, 2);

console.log(`Power Consumption: ${gamma * epsilon}`);
