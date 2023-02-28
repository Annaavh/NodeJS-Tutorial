const path = require("path");

// console.log(__filename);
// console.log(__dirname); //folder name

// console.log(path.basename(__filename)); //basename is the last name in the url
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename)); //extension name
// console.log(path.extname(__dirname));

// console.log(path.format(path.parse(__filename))); //it's the same as __filename

// console.log(path.isAbsolute(__filename));//true
// console.log(path.isAbsolute("./data.json"));//false

// console.log(path.join("folder1","folder2","index.html"));
// console.log(path.join("/folder1","folder2","index.html"));
// console.log(path.join("/folder1","//folder2","index.html"));
// console.log(path.join("/folder1","//folder2","../index.html"));
// console.log(path.join(__dirname,"data.json"))

console.log(path.resolve("folder1","folder2","index.html"));
console.log(path.resolve("/folder1","folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","../index.html"));
console.log(path.resolve(__dirname,"data.json"))