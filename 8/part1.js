const fs = require("fs");

const lines = fs.readFileSync(`${__dirname}/signal.txt`, "utf8").split("\n");

const outputLines = lines.map((line) => line.split("|")[1]);

const outputDigits = [];

outputLines.forEach((line) =>
  line
    .split(" ")
    .filter((line) => line != "")
    .forEach((value) => outputDigits.push(value))
);

let numOf1478 = 0;

outputDigits.forEach((digit) => {
  switch (digit.length) {
    case 2:
    case 4:
    case 7:
    case 3:
      numOf1478++;
      break;
  }
});

console.log(`Total 1, 4, 7 or 8: ${numOf1478}`);
