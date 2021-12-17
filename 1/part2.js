const fs = require("fs");

const measurements = fs
  .readFileSync(`${__dirname}/report.txt`, "utf8")
  .split("\n");

let increases = 0;

const sumMeasurements = [];

for (let i = 0; i < measurements.length - 2; i++) {
  sumMeasurements.push(
    parseInt(measurements[i]) +
      parseInt(measurements[i + 1]) +
      parseInt(measurements[i + 2])
  );
}

for (let i = 1; i < sumMeasurements.length; i++) {
  if (sumMeasurements[i] > sumMeasurements[i - 1]) {
    increases++;
  }
}

console.log(`Total Increases: ${increases}`);
