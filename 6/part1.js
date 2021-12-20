const fs = require("fs");

const rawFish = fs
  .readFileSync(`${__dirname}/initialFish.txt`, "utf8")
  .split(",");

const fish = [];

rawFish.forEach((f) => {
  fish.push(parseInt(f));
});

const totalDays = 80;

for (let day = 0; day < totalDays; day++) {
  for (i in fish) {
    if (fish[i] == 0) {
      fish.push(8);
      fish[i] = 6;
    } else {
      fish[i]--;
    }
  }
}

console.log(`Total fish: ${fish.length}`);
