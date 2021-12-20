const fs = require("fs");

const vents = fs.readFileSync(`${__dirname}/vents.txt`, "utf8").split("\n");

const map = [];

const totalX = 1000;
const totalY = 1000;

const row = [];

for (let x = 0; x <= totalX; x++) {
  row[x] = 0;
}

for (let y = 0; y <= totalY; y++) {
  map[y] = [...row];
}

vents.forEach((vent) => {
  const [from, to] = vent.split(" -> ");
  const [fromX, fromY] = from.split(",");
  const [toX, toY] = to.split(",");

  const yDirection = getDirection(parseInt(fromY), parseInt(toY));
  const xDirection = getDirection(parseInt(fromX), parseInt(toX));

  let x = parseInt(fromX);
  let y = parseInt(fromY);

  while (y != parseInt(toY) || x != parseInt(toX)) {
    addPoint(x, y);

    y += yDirection;
    x += xDirection;
  }

  addPoint(x, y);
});

let intersections = 0;

for (let y = 0; y <= totalY; y++) {
  for (let x = 0; x <= totalX; x++) {
    if (map[y][x] >= 2) {
      intersections++;
    }
  }
}

console.log(`Total Intersections: ${intersections}`);

// console.table(map);

function addPoint(x, y) {
  map[y][x]++;
}

function getDirection(from, to) {
  if (from == to) {
    return 0;
  }

  return from < to ? 1 : -1;
}
