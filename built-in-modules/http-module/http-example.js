const http = require("node:http");
const fs = require("node:fs");

// const server = http.createServer((req, res) => {
//   const superHero = {
//     firstName: "Bruce",
//     lastName: "Wayne",
//   };
//   //   res.writeHead(200, { "Content-Type": "text/plain" });
//   //   res.end("Hello world");

//   //   res.writeHead(200, { "Content-Type": "application/json" });
//   //   res.end(JSON.stringify(superHero));

//   res.writeHead(200, { "Content-Type": "text/html" });
//   //   res.end("<h1>Hello world</h1>");
//   //   const html = fs.readFileSync("./index.html", "utf-8");
//   //   res.end(html);
//   //   fs.createReadStream(__dirname + "/index.html").pipe(res);
//   const name = "Vishwas";
//   let html = fs.readFileSync("./index.html", "utf-8");
//   html = html.replace("{{name}}", name);
//   res.end(html);
// });

const server = http.createServer((req, res) => {
  //   res.end(req.url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        firstName: "Bruce",
        lastName: "Wayne",
      })
    );
  } else {
    res.writeHead(404);
    res.end("Page Not Found!");
  }
});
server.listen(3000, () => {
  console.log("server running on port 3000");
});
