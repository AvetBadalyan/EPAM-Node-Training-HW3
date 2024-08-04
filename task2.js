/* 2. Transform Streams Homework
Task:
Create a Node.js script that uses a transform stream to handle JSON objects, modifying each one by adding a new property timestamp and converting it back into a string before writing it to an output file. */

const fs = require("fs");
const { Transform, Readable } = require("stream");

class AddTimestamp extends Transform {
  constructor() {
    super({ objectMode: true });
  }

  _transform(obj, encoding, callback) {
    obj.timestamp = new Date().toISOString();
    this.push(obj);
    callback();
  }
}

fs.readFile("input.json", (err, data) => {
  if (err) throw err;

  const jsonArray = JSON.parse(data);
  const readableStream = Readable.from(jsonArray);
  const transformStream = new AddTimestamp();

  const results = [];

  readableStream
    .pipe(transformStream)
    .on("data", (chunk) => results.push(chunk))
    .on("end", () => {
      fs.writeFile("output.json", JSON.stringify(results, null, 2), (err) => {
        if (err) throw err;
        console.log("Processing complete. Check output.json for results.");
      });
    });
});
