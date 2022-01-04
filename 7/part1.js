const fs = require("fs");

const rawCrabPositions = fs
  .readFileSync(`${__dirname}/crabPositions.txt`, "utf8")
  .split(",");

const crabPositions = [];

rawCrabPositions.forEach((position) => {
  crabPositions.push(parseInt(position));
});

const maxPosition = Math.max(...crabPositions);
const minPosition = Math.min(...crabPositions);

console.log(`Max: ${maxPosition}, Min: ${minPosition}`);

let minFuel;
let position;

for (let i = minPosition; i <= maxPosition; i++) {
  const fuelForPosition = calculateFuelForPosition(crabPositions, i);

  if (!minFuel || fuelForPosition < minFuel) {
    minFuel = fuelForPosition;
    position = i;
  }
}

console.log(`Quickest Fuel Position: ${minFuel} at ${position}`);

function calculateFuelForPosition(crabPositions, position) {
  let fuel = 0;

  for (i in crabPositions) {
    fuel += Math.abs(crabPositions[i] - position);
  }

  return fuel;
}
