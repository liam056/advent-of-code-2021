const fs = require("fs");

const rawLines = fs.readFileSync(`${__dirname}/signal.txt`, "utf8").split("\n");

const lines = rawLines.map((line) => {
  const parts = line.split("|");
  return `${parts[0]} ${parts[1]}`
});

const digits = [];

lines.forEach((line) =>
  line
    .split(" ")
    .filter((line) => line != "")
    .forEach((value) => digits.push(value))
);

lines.forEach(getMapping);

function convertStringToNumber(string, mapping) {}

function getMapping(line) {
  console.log(line);

  const digits = {
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
  };

  const digitLengths = {
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: []
  };

  const rawDigits = line
  .split(" ")
  .filter((line) => line != "");

  rawDigits.forEach(digit => digitLengths[digit.length].push(digit));
  
  rawDigits.forEach((letter) => {
      switch (letter.length) {
        case 2: // 1
          digits[1] = [...letter];
          break;
        case 4: // 4
          digits[4] = [...letter];
          break;
        case 7: // 8
          digits[8] = [...letter];
          break;
        case 3: // 7
          digits[7] = [...letter];
          break;
      }
    });

  const parts = {};

  [...digits[7]].forEach(item => {
    if(!digits[1].includes(item)) {
      parts['a'] = item;
    }
  })

  // Figuring out number 3
  digitLengths[5].forEach(fiveLetterDigit => {
    let matches = 0;
    [...digits[1]].forEach(char => {
      if(fiveLetterDigit.includes(char)) {
        matches++;
      }
    });

    if(matches == 2) {
      digits[3] = [...fiveLetterDigit];
      digitLengths[5].splice(digitLengths[5].indexOf(fiveLetterDigit), 1)
    }
  });

  // Figuring out number 6
  digitLengths[6].forEach(sixLetterDigit => {
    let matches = 0;
    [...digits[1]].forEach(char => {
      if(sixLetterDigit.includes(char)) {
        matches++;
      }
    });

    if(matches != 2) {
      digits[6] = [...sixLetterDigit];
      digitLengths[6].splice(digitLengths[6].indexOf(sixLetterDigit), 1)
    }
  });

  // Figuring out number 5
  digitLengths[5].forEach(fiveLetterDigit => {
    let matches = 0;
    [...digits[6]].forEach(char => {
      if(fiveLetterDigit.includes(char)) {
        matches++;
      }
    });

    if(matches == 5) {
      digits[5] = [...fiveLetterDigit];
    }
  });

  // Figuring out number 0
  digitLengths[6].forEach(sixLetterDigit => {
    let matches = 0;
    [...digits[7]].forEach(char => {
      if(sixLetterDigit.includes(char)) {
        matches++;
      }
    });

    if(matches != 2) {
      digits[6] = [...sixLetterDigit];
      digitLengths[6].splice(digitLengths[6].indexOf(sixLetterDigit), 1)
    }
  });

  console.log(digits);
}
