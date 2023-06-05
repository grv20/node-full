//cluster module
//node is single threaded
//no matter how many cores you have, node only uses a single core of your CPU
//this is fine for i/o operations but if the code has long running and cpu intensive
//operations, your application might struggle from a performance point of view

//the cluster module enables the creation of chile processes (also called workers) that run simultaneously
//all created workers share the same port

const cluster = require("node:cluster");
const http = require("node:http");
const OS = require("node:os");

console.log(OS.cpus().length);

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker process ${process.pid} started`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home page");
    } else if (req.url === "/slow-page") {
      for (let i = 0; i < 6000000000; i++) {}
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow page");
    }
  });
  server.listen(8000, () => console.log("server is running on port 8000"));
}
