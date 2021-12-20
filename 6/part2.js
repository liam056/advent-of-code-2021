const fs = require("fs");

const rawFish = fs
  .readFileSync(`${__dirname}/initialFish.txt`, "utf8")
  .split(",");

const fish = [];

rawFish.forEach((f) => {
  fish.push(parseInt(f));
});

const totalDays = 256;

for (let day = 0; day < totalDays; day++) {
  console.log(`Day ${day}, ${fish.length} fish`);
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
