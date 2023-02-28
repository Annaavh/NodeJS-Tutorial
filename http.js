const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };
  //1st case
  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.end(JSON.stringify(superHero));

  //2nd case
  const name = "Vishwas";
  res.writeHead(200, { "Content-Type": "text/html" });
  //1st version of 2nd case
  let html = fs.readFileSync("./index.html", "utf-8");
  html = html.replace("{{name}}", name);
  res.end(html);

  //2nd version of 2nd case(recommended)
  //   fs.createReadStream(__dirname + "/index.html").pipe(res);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
