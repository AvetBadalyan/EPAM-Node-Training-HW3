/* 4. HTTP Streaming
Task: Create an HTTP server using the `http` module that streams a large file to the client upon request instead of loading it into memory all at once. */

const http = require("http");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const server = http.createServer(async (req, res) => {
  const filePath = path.join(__dirname, "largeFile.txt");

  try {
    const stat = await fsPromises.stat(filePath);

    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Content-Length": stat.size,
    });

    const readable = fs.createReadStream(filePath);
    readable.pipe(res);

    readable.on("error", (err) => handleError(err, res));
  } catch (err) {
    handleError(err, res);
  }
});

function handleError(err, res) {
  console.error("Error:", err);
  if (!res.headersSent) {
    res.writeHead(500, { "Content-Type": "text/plain" });
  }
  res.end("Internal Server Error");
}

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
