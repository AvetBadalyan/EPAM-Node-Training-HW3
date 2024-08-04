# Node.js Streams Homework

## Overview

This repository contains solutions for four homework tasks related to Node.js streams. Each task demonstrates different aspects of working with streams in Node.js, including basic stream operations, transform streams, back pressure, and HTTP streaming.

## Tasks

### 1. Basic Stream Operations

**Description:**  
This script demonstrates basic stream operations by reading a text file and writing its contents to another file using Node.js streams. Two versions are provided: one using event listeners and another using the `pipe` method.

**Files:**

- `basicStreamOperations.js`

**Commands:**

- **Without Pipes:**

  ```bash
  node basicStreamOperations.js
  This will use event listeners to read from input.txt and write to output.txt.
  ```

With Pipes:

bash
Copy code
node basicStreamOperations.js
This will use the pipe method to achieve the same result.

2. Transform Streams
   Description:
   This script creates a transform stream to process JSON objects. It adds a timestamp property to each JSON object and writes the modified objects to an output file.

Files:

transformStreams.js
Commands:

bash
Copy code
node transformStreams.js
Ensure you have input.json in the same directory. This script reads from input.json, processes the data, and writes the output to output.json.

3. Implementing Basic Back Pressure
   Description:
   This script demonstrates back pressure in streams by creating a writable stream that writes data slower than it is read from a readable stream.

Files:

backPressure.js
Commands:

bash
Copy code
node backPressure.js
This will create a readable stream from an array of strings and a writable stream that simulates slow writing.

4. HTTP Streaming
   Description:
   This script sets up an HTTP server that streams a large file to the client upon request. It demonstrates how to handle large files efficiently by streaming them instead of loading them into memory all at once.

Files:

httpStreaming.js
Commands:

bash
Copy code
node httpStreaming.js
Open your browser and navigate to http://localhost:3000. Ensure you have largeFile.txt in the same directory. The server will stream the file to the client.

Setup
Clone the repository:

bash
Copy code
git clone <repository-url>
cd <repository-directory>
Ensure you have Node.js installed. You can download it from nodejs.org.

Run the respective scripts using the commands provided above.

Notes
Ensure that all required files (input.txt, input.json, largeFile.txt) are present in the same directory as the script files.
Modify file paths in the scripts if your files are located elsewhere.
