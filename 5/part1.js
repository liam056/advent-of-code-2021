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

  if (fromX === toX) {
    const direction = parseInt(fromY) < parseInt(toY) ? 1 : -1;

    let x = parseInt(fromX);
    let y = parseInt(fromY);

    while (y != parseInt(toY)) {
      addPoint(x, y);

      y += direction;
    }

    addPoint(x, y);
  }

  if (fromY === toY) {
    const direction = parseInt(fromX) < parseInt(toX) ? 1 : -1;

    let x = parseInt(fromX);
    let y = parseInt(fromY);

    while (x != parseInt(toX)) {
      addPoint(x, y);

      x += direction;
    }

    addPoint(x, y);
  }
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

function addPoint(x, y) {
  map[y][x]++;
}
