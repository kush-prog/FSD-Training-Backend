const fs = require('node:fs');

const data = fs.readFileSync("data.txt");
// console.log(data.toString());

console.log(data);
if (data.match("H")) {
    console.log("H is present");
    const changedData = data.replace("H", "Ramu");
    fs.writeFileSync("./data.txt", changedData);
  }

// fs.writeFileSync("data1.txt", "ABES Promise");
// fs.appendFileSync("./data1.txt", " AKTU");
// fs.renameSync("data1.txt", "data2.txt");

// fs.unlinkSync("data2.txt");