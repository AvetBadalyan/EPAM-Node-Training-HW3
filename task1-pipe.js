/* 1. Basic Stream Operations
ask: Write a simple Node.js script using the `fs` module to read a text file and write it to another text file using streams.(Do this with and without pipes) */

const fs = require("fs");

const readable = fs.createReadStream("input.txt", { encoding: "utf8" });
const writable = fs.createWriteStream("output.txt");

readable.pipe(writable);

readable.on("error", (err) => {
  console.error("Error reading file:", err);
});

writable.on("error", (err) => {
  console.error("Error writing file:", err);
});
