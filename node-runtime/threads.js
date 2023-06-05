const crypto = require("node:crypto");

process.env.UV_THREADPOOL_SIZE = 5;
const MAX_CALLS = 5;
const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });
}
//when i took upto max_calls 4, they almost result in parallel, indicating we have atleast 4 threads in pool
//a few async methods like fs.readFile and crypto.pbkdf2 run on a seperate
//thread in libuv's thread pool. They do run synchronously in their own thread
//but as far as the main thread is concerned, it appears as if method is running asynchronously

//we can increase threads in thread pool
// by using this process.env.UV_THREADPOOL_SIZE = 6;
//but it varies from system to systemif macbook has 8 cores, only 8 threads might work in parallel

// const start = Date.now();
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);
