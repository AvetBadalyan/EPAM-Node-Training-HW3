/* 3. Implementing Basic Back Pressure
Task: Implement a readable and a writable stream where the writable stream deliberately writes data slower than the readable reads it, demonstrating how back pressure is managed. */

const { Readable, Writable } = require("stream");

class SlowWritable extends Writable {
  _write(chunk, encoding, callback) {
    setTimeout(() => {
      console.log(`Writing: ${chunk.toString()}`);
      callback();
    }, 1000); 
  }
}

const readable = Readable.from(["Avet", "Armen", "Arman", "Arshak", "Ashot"], {
  objectMode: true,
  highWaterMark: 2,
});

const writable = new SlowWritable();

readable.pipe(writable);
