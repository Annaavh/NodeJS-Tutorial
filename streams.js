//A stream is a sequence of data that is being moved from, one point to another over time
//work with data in chunks instead of waiting for the entire data to bbe available at once
const fs = require("fs");
const zlib = require("zlib"); //helps to create zip files

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

//chaining
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

const writeableStream = fs.createWriteStream("./file2.txt");

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });
readableStream.pipe(writeableStream); //verevi graci karch tarberakn a file i mej text avelacnelu pipe eri mijocov
