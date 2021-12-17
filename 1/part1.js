const fs = require("fs");

const measurements = fs
  .readFileSync(`${__dirname}/report.txt`, "utf8")
  .split("\n");

let increases = 0;

for (let i = 1; i < measurements.length; i++) {
  if (parseInt(measurements[i]) > parseInt(measurements[i - 1])) {
    increases++;
  }
}

console.log(`Total Increases: ${increases}`);
