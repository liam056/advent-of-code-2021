const fs = require("fs");

const diagnostics = fs
  .readFileSync(`${__dirname}/diagnostics.txt`, "utf8")
  .split("\n");

function getCommonBit(diagnostics, bit) {
  const totalOnes = diagnostics
    .map((diagnostic) => parseInt(diagnostic[bit]))
    .reduce((total, value) => total + value);

  if (diagnostics.length / 2 === totalOnes) {
    return 1;
  }

  return totalOnes >= diagnostics.length / 2 ? 1 : 0;
}

function filterValues(diagnostics, bit, value) {
  return diagnostics.filter((diagnostic) => {
    return diagnostic[bit] == value;
  });
}

let o2List = diagnostics;
let co2List = diagnostics;

for (let i = 0; i <= diagnostics[0].length - 1; i++) {
  if (o2List.length > 1) {
    o2List = filterValues(o2List, i, getCommonBit(o2List, i));
  }

  if (co2List.length > 1) {
    co2List = filterValues(co2List, i, getCommonBit(co2List, i) ? 0 : 1);
  }
}

console.log(
  `Life Support Rating: ${parseInt(o2List[0], 2) * parseInt(co2List[0], 2)}`
);
