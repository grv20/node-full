const fs = require("node:fs");
const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});
const writeableSteam = fs.createWriteStream("./file2.txt");
readableStream.on("data", (chunk) => {
  console.log(chunk);
  writeableSteam.write(chunk);
});

//types of stream
//Readable, Writable, Duplex, Transform
//eg, reading from file, writing from file, sockets, file compression where you write compressed data and read de-compressed data
