# Node.js Stream Tasks

## 1. Basic Stream Operations

### Description

Write a simple Node.js script using the `fs` module to read a text file and write it to another text file using streams. Implement this with and without using pipes.

### Files

- `task1.js` (without pipes)
- `task1-pipe.js` (with pipes)

### Commands

#### Without Pipes:

```bash
node task1.js
# This will use event listeners to read from input.txt and write to output.txt.
With Pipes:

node task1-pipe.js
# This will use the pipe method to achieve the same result.

```

## 2. Transform Streams

### Description

This script creates a transform stream to process JSON objects. It adds a timestamp property to each JSON object and writes the modified objects to an output file.

Files
task2.js
Commands

node task2.js

### This will read from input.json, add a timestamp to each JSON object, and write the result to output.json.

## 3. Implementing Basic Back Pressure

### Description

Implement a readable and a writable stream where the writable stream deliberately writes data slower than the readable reads it, demonstrating how back pressure is managed.

Files
task3.js
Commands

node task3.js

### This will demonstrate back pressure management by writing data slower than it is read.

## 4. HTTP Streaming

### Description

Create an HTTP server using the http module that streams a large file to the client upon request instead of loading it into memory all at once.

Files
task4.js
Commands

node task4.js

### This will start an HTTP server that streams a large file to the client.

### The server listens on port 3000.

#### added tigranmk as a Reviewer
