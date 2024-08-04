/* 1. Basic Stream Operations
ask: Write a simple Node.js script using the `fs` module to read a text file and write it to another text file using streams.(Do this with and without pipes) */

const fs = require("fs");

const readable = fs.createReadStream("input.txt", { encoding: "utf8" });
const writable = fs.createWriteStream("output.txt");

readable.on("data", (chunk) => {
  writable.write(chunk);
});

readable.on("end", () => {
  writable.end();
});
