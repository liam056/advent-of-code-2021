const fs = require("fs");

const course = fs.readFileSync(`${__dirname}/course.txt`, "utf8").split("\n");

let horizontal = 0;
let depth = 0;

for (let i = 0; i < course.length; i++) {
  const [direction, value] = course[i].split(" ");

  const number = parseInt(value);

  switch (direction) {
    case "forward":
      horizontal += number;
      break;
    case "down":
      depth += number;
      break;
    case "up":
      depth -= number;
      break;
  }
}

console.log(depth * horizontal);
