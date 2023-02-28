const fs = require("fs");

console.log("first");
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

console.log("second");

fs.readFile("./file.txt", "utf-8", (error, data) => {
  //this one works asynch
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("third");

fs.writeFileSync("./greet.txt", "Hello World!");
//ete chka stexcuma ete ka update a anum
fs.writeFile("./greet.txt", "Hello Ann", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written");
  }
});

//it's recommended to use readFile instead of readFileSync ,
//because it doesn't block the execution when there are a lot amount of data

//flag:"a"(append)erku textery irar a miacnum
fs.writeFile("./greet.txt", "Hello Ann", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written");
  }
});
