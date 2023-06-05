const https = require("node:https");

const MAX_CALLS = 12;
const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}

//Although both crypto.pbkdf2 and https.request are asynchronous,
// https.request method doesnt seem to use the thread pool
// https.request doesnt seem to be affected by number of CPU cores either

//https.request is a network i/o ops and not a cpu bound operation
// it doesnt use thread pool
//libuv instead delegates the work to os kernel and whenever possible,
//it will poll the kernel and see if request has completed
