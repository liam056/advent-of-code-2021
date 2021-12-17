const fs = require("fs");

const course = fs.readFileSync(`${__dirname}/course.txt`, "utf8").split("\n");

let aim = 0;
let horizontal = 0;
let depth = 0;

for (let i = 0; i < course.length; i++) {
  const [direction, value] = course[i].split(" ");

  const number = parseInt(value);

  switch (direction) {
    case "forward":
      horizontal += number;
      depth += aim * number;
      break;
    case "down":
      aim += number;
      break;
    case "up":
      aim -= number;
      break;
  }
}

console.log(depth * horizontal);
